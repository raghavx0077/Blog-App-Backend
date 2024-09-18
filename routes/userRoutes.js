const express = require('express')
const router =express.Router();
const {getAllUser,createUser,getUserById,updateUser,deleteUserById}=require('../controller/userController')
router.post('/create',createUser);

router.get('/',getAllUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUserById);


module.exports=router;