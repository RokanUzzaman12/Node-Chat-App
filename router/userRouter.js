const express = require('express')
const {getUsers} = require('../controller/usersController')
const router = express.Router()
const decorateHtmlResponse = require('../middlewares/common/decorateHtml')

router.get('/',decorateHtmlResponse('Users'),getUsers);

module.exports = router