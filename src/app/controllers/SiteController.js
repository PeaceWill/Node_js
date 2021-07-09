
const Course = require('../models/Course');

class SiteController {

    /** 
     * GET /
    */
    index(req, res) {

        Course.find({}, (err, courses) => {
            if (!err) return res.json(courses);
            return res.status(400).json({error: "Error"});
        })       
        
        Course.find({})
            .then(courses => res.json(courses))
            .catch(error => console.log(error));
        // res.render('home')
    }

    /** 
     * GET /search
    */
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;