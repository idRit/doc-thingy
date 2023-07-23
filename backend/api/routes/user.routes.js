const express = require("express");
const router = express.Router();

const userController = require('../controllers/user.controller');

router.post('/create', userController.createUser);
router.put('/:section/:user_id/edit-profile', userController.editUser);
router.get('/:user_id', userController.getUser);
router.get('/search/:name', userController.searchUser);

module.exports = router;
