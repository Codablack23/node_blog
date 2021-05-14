const Blogs = require('../models/blogs_model')

const get_blog = async(req, res) => {
    const blog = await Blogs.findOne({ where: { id: req.params.id } })
    res.render('blogs/blog_details', { title: "Detail", blog })
}
const delete_blog = async(req, res) => {
    const result = {
        status: "Failed"
    }
    await Blogs.destroy({ where: { id: req.body.id } })
    result.status = "Success"
    res.json(result)

}

const create_blog = (req, res) => {
    res.render('blogs/create_blog', { title: "Create Blogs" })
}

// create new Blog
const new_blog = async(req, res) => {
    const result = {
        status: "",
    }
    console.log(req.body)
    const existing_blog = await Blogs.findAll({ where: { title: req.body.title } })
    if (existing_blog.length > 0) {
        result.status = "Failed"
        result.error = "Blog Post Already Exist"
    } else {
        await Blogs.create(req.body);
        result.status = "Success"
    }
    res.json({ result })
}

const render_blogs = async(req, res) => {
    const blog = await Blogs.findAll()
    console.log(blog)
    res.render('blogs/all_blogs', { title: "Blogs", blog })
}
module.exports = {
    get_blog,
    create_blog,
    render_blogs,
    new_blog,
    delete_blog
}