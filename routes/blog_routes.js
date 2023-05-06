const express = require('express')
const {getBlogs,createBlog} = require('../controller/blog_controller')

const router = express.Router();

router.get('/blog', getBlogs)
router.post('/blog', createBlog)

module.exports = router