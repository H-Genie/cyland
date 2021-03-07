const express = require('express');
const router = express.Router();

// 모듈 분리
const create = require('./create');
const read = require('./read');
const verifyUpdate = require('./verify_update');
const update = require('./update');
const del = require('./delete');

// 라우터 등록
router.route('/').get(read);
router.route('/create').post(create);
router.route('/modify').post(verifyUpdate);
router.route('/update').post(update);
router.route('/delete').post(del);


module.exports = router;