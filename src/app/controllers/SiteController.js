
const Course = require('../models/Course');
const { MultiMongoostToObject } = require('../../util/mongose.help')

class SiteController {

    /** 
     * GET /
    */
    index(req, res, next) {      
        Course.find({ deletedAt: null})
            .then(courses => {
                res.render('home', {courses: MultiMongoostToObject(courses)})
            })
            .catch(next);
    }

    /** 
     * GET /search
    */
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;