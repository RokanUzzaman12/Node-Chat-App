const express = require('express')
const {getInbox} = require('../controller/inboxController')
const router = express.Router()
const decorateHtmlResponse = require('../middlewares/common/decorateHtml')

router.get('/',decorateHtmlResponse('Inbox'),getInbox);

module.exports = router