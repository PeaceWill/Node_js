const Course = require('../models/Course');
const { MultiMongoostToObject } = require('../../util/mongose.help')

class MeController {
    
    /**  
     *  GET /me/store/courses
    */
   index(req, res, next) {
        Course.find()
            .then(courses => res.render('me/stored-courses', {courses: MultiMongoostToObject(courses) }))
            .catch(next);
   }

   /** 
    *  GET /me/trash/courses
   */
   trash(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', { courses: MultiMongoostToObject(courses) }))
            .catch(next)
   }
}

module.exports = new MeController;