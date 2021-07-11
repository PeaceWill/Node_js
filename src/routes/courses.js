const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create);
router.post('/store', courseController.storeCourse);
router.put('/:id', courseController.updateCourse);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.detail);

module.exports = router;