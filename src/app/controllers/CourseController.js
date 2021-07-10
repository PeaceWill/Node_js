const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongose.help')

class CourseController {
    
    /** 
     *  GET /courses/detail
    */
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => { 
                res.render('courses/detail', { course: mongooseToObject(course) }) 
            })
            .catch(next);
    }
}

module.exports = new CourseController;