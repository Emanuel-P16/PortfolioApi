const {request,response} = require('express')
const Quests = require('../models/quests')
// const Quest = require('../models/quests')
const questsGet = async (req = request, res = response) => {
        const quests = await Quests.find({user_id:'test1'})
    res.json({
        msg: 'get',
        quests
    })


} 
const questsPut = async (req=request, res=response) => {
    
    const {_id,...quest} = req.body

    const quests = await Quests.findByIdAndUpdate(_id,quest,{new:true})
    
 
    res.json({
        msg: 'put',
        quests
    })


} 
const questsPost= async (req=request, res=response) => {

    const {_id,...quest} = req.body

    const quests = new Quests({...quest})

    await quests.save()

    res.json({
        msg: 'post',
        quest
    })


} 
const questsDelete = async (req=request, res=response) => {

    res.json({
        msg: 'delete'
    })


} 

module.exports = {
    questsGet,
    questsPut,
    questsPost,
    questsDelete
}