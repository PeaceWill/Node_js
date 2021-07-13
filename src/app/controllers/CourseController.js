const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongose.help");

class CourseController {
    /**
     *  GET /courses/detail
     */
    detail(req, res, next) {
        Course.findOne({
            slug: req.params.slug,
        })
            .then((course) => {
                res.render("courses/detail", {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    /**
     *  GET /courses/create
     */
    create(req, res, next) {
        res.render("courses/create");
    }

    /**
     *  GET /courses/id/edit
     */
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render("courses/edit", {
                    course: mongooseToObject(course),
                })
            )
            .catch(next);
    }

    /**
     *  POST /courses/storeCourse
     */
    storeCourse(req, res, next) {
        const formData = req.body;
        formData.imageURL = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const course = new Course(formData);
        course.save().then(() => res.redirect("/"));
    }

    /**
     *  PUT /courses/id
     */
    updateCourse(req, res, next) {
        const formData = req.body;
        formData.imageURL = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        Course.updateOne(
            {
                _id: req.params.id,
            },
            formData
        )
            .then(() => res.redirect("/me/stored/courses"))
            .catch(next);
    }

    /**
     *  PATCH /courses/id
     */
    restoreCourse(req, res, next) {
        Course.restore({
            _id: req.params.id,
        })
            .then(() => res.redirect("back"))
            .catch(next);
    }

    /**
     *  DELETE /courses/id
     */
    deleteCourse(req, res, next) {
        Course.delete({
            _id: req.params.id,
        })
            .then(() => res.redirect("back"))
            .then(next);
    }

    /**
     *  DELETE /courses/id/remove
     */
    removeCourse(req, res, next) {
        Course.deleteOne({
            _id: req.params.id,
        })
            .then(() => res.redirect("back"))
            .catch(next);
    }
}

module.exports = new CourseController();
