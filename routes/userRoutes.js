const express = require('express')
const router =express.Router();
const authMiddleware = require('../middleware/AuthMiddleware');
const {getAllUser,createUser,getUserById,updateUser,deleteUserById}=require('../controller/userController')


router.post('/create',createUser);
router.get('/getalluser',getAllUser);
router.get('/getuserbyid/:id', authMiddleware,getUserById);
router.put('/updateuserbyid/:id', updateUser);
router.delete('/deleteuserbyid/:id', deleteUserById);


module.exports=router;