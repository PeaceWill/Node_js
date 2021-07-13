const Course = require('../models/Course');
const { MultiMongoostToObject } = require('../../util/mongose.help')

class MeController {
    
    /**  
     *  GET /me/store/courses
    */
   index(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, documentsDeleted]) => {
                res.render('me/stored-courses', {courses: MultiMongoostToObject(courses), documentsDeleted });
            })
            .catch(next)
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