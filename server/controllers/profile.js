const formidable = require('formidable')
const _ = require('lodash')
const fs = require('fs')
const { errorHandler } = require('../helpers/dbErrorHandler');
const Profile = require("../models/profile")

exports.updateProfile = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            })
        }

        const { exp, int1, int2, int3, prof1, prof2 } = fields

        if (!exp || !int1 || !int2 || !int3 || !prof1 || !prof2) {
            return res.status(400).json({
                error: "All fields are requried"
            })
        }

        let profile = new Profile(fields)

        if (files.photo) {
            // console.log(files.photo.size);
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Image should be less than 1MB in size"
                })
            }
            profile.photo.data = fs.readFileSync(files.photo.path)
            profile.photo.contentType = files.photo.type
        }

        profile.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(result);
        })
    })
}