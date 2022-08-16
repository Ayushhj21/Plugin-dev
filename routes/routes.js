const express=require('express')
const router=express.Router();

const user= require('../controllers/user')
const plugin=require('../controllers/plugin')

router.post('/create/user', user.createUser);

router.post('/create/plugin',plugin.createPlugin)


router.get('/plugins',plugin.getAllPlugins)
router.get('/plugin/:id',plugin.getSpecificPlugin)

router.post('/store/plugins/:id',plugin.storePlugin)

module.exports=router   