const express = require('express')
const { get_blog, create_blog, render_blogs, new_blog, delete_blog } = require('../controllers/blog_controller')
const blog = express.Router()

blog.get('/create', create_blog)
blog.get('/all', render_blogs)
blog.post('/create', new_blog)
blog.post('/delete', delete_blog)
blog.get('/:id', get_blog)


module.exports = blog