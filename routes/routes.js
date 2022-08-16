const express=require('express')
const router=express.Router();

const user= require('../controllers/user')
const plugin=require('../controllers/plugin')

router.post('/create/user', user.createUser);

router.post('/create/plugin',plugin.createPlugin)


router.get('/plugins',plugin.getAllPlugins)
router.get('/plugin/:id',plugin.getUserPlugin)

router.post('/store/plugins/:id',plugin.storePluginIds)

module.exports=router   