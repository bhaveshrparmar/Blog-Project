const router = require('express').Router()
const controller = require('../controllers/blog.controller')
const { VerifyAuth } = require('../Middleware/Varify.middle')
const upload = require("../utils/upload")


router.post("/", upload.array("image", 3), VerifyAuth, controller.addBlog)
router.put("/", upload.array("image", 3), VerifyAuth, controller.editBlog)
router.get("/", VerifyAuth, controller.getBlogs)
router.delete("/:id", controller.deleteBlog)

module.exports = router