import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from pymongo import MongoClient
from sklearn.decomposition import LatentDirichletAllocation
import re
from nltk.stem import WordNetLemmatizer
import numpy as np
import nltk

client = MongoClient('mongodb+srv://<username>:1234Y1olo@cluster0.ztp7u.mongodb.net/relearn?retryWrites=true&w=majority')
db = client.relearn
collection = db.profile
df = pd.DataFrame(list(collection.find()))

print(df)

#converting all integer values to string so that they can be concattinated later in the program
for column in df.columns:
    df[column]=df[column].apply(str)

user = 'George' # target user
userspecs = list(np.array(df[df['name']==user])[0])[1:]

#a function to combine the values of the different columns into a single string
def combined_specs(row):
    return(row['experience']+" "+row['interest-1']+" "+row['interest-2']+" "+row['interest-3']+" "+row['linkedIn']+" "+row['github']+" "+row['proficiency-1']+" "+row['proficiency-2'])

#apply the function to each row in the dataframe to store the combined strings into a new column called combimed_specs
df['combined_specs']=df.apply(combined_specs,axis=1)

#convert a collection of data into count_matrix
count_matrix=CountVectorizer()
count_matrix=count_matrix.fit_transform(df['combined_specs'])

#convert a the count_matrix into cosine similarity matrix
cosine_sim_mat=cosine_similarity(count_matrix)


friends = cosine_sim_mat[df.index[df['name']==user]][0].tolist()
friends_list = []
for i,j in enumerate(friends):
    friends_list.append((i,j))
friends_list.sort(key=lambda x:x[1],reverse=True)

# find top 3 friends
for i,j in friends_list[1:4]:
    print(df.iloc[i]['name'])

documents = df[['about-me']]

my_stopwords = nltk.corpus.stopwords.words('english')
lemmatizer = WordNetLemmatizer() 
my_punctuation = '!"$%&\'()*+,-./:;<=>?[\\]^_`{|}~•@'

# cleaning master function
def clean_tweet(tweet, bigrams=True):
    tweet = tweet.lower() # lower case
    tweet = re.sub('['+my_punctuation + ']+', ' ', tweet) # strip punctuation
    tweet = re.sub('\s+', ' ', tweet) #remove double spacing
    tweet = re.sub('([0-9]+)', '', tweet) # remove numbers
    tweet_token_list = [word for word in tweet.split(' ')
                            if word not in my_stopwords] # remove stopwords

    tweet_token_list = [lemmatizer.lemmatize(word) if '#' not in word else word
                        for word in tweet_token_list] # apply word rooter
    if bigrams:
        tweet_token_list = tweet_token_list+[tweet_token_list[i]+'_'+tweet_token_list[i+1]
                                            for i in range(len(tweet_token_list)-1)]
    tweet = ' '.join(tweet_token_list)
    return tweet

df['about-me'] = df['about-me'].apply(clean_tweet)

# the vectorizer object will be used to transform text to vector form
vectorizer = CountVectorizer(token_pattern='\w+|\$[\d\.]+|\S+')

# apply transformation
tf = vectorizer.fit_transform(df['about-me']).toarray()

# tf_feature_names tells us what word each column in the matric represents
tf_feature_names = vectorizer.get_feature_names()

number_of_topics = 10

model = LatentDirichletAllocation(n_components=number_of_topics, random_state=0)

def display_topics(model, feature_names, no_top_words):
    topic_dict = {}
    for topic_idx, topic in enumerate(model.components_):
        topic_dict["Topic %d words" % (topic_idx)]= ['{}'.format(feature_names[i])
                        for i in topic.argsort()[:-no_top_words - 1:-1]]
        # topic_dict["Topic %d weights" % (topic_idx)]= ['{:.1f}'.format(topic[i])
        #                 for i in topic.argsort()[:-no_top_words - 1:-1]]
    return pd.DataFrame(topic_dict)

no_top_words = 3
lda = display_topics(model, tf_feature_names, no_top_words)

words = []
topics = []
for cols in lda.columns:
    words.append(lda[cols].unique())
for i in words:
    topics.append(i[0])
    topics.append(i[1])
    topics.append(i[2])

print(topics)