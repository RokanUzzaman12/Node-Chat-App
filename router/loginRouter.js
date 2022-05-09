const express = require('express')
const {getLogin} = require('../controller/loginController')
const router = express.Router()
const decorateHtmlResponse = require('../middlewares/common/decorateHtml')

router.get('/',decorateHtmlResponse("Login"),getLogin);

module.exports = router