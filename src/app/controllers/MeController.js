const Course = require('../models/Course');
const { MultiMongoostToObject } = require('../../util/mongose.help')

class MeController {
    
    /**  
     *  GET /me
    */
   index(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {courses: MultiMongoostToObject(courses) }))
            .catch(next);
   }

}

module.exports = new MeController;