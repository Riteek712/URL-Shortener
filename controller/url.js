const  shortid = require("shortid")
const URL = require('../model/url')

const generateNewShortUrl= async(req, res) =>{
    const body = req.body;
    if(!body.url) return res.status(400).json({errpr:"url is required!"})
    const shortId = shortid()

    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory:[]
    })

    return res.json({id: shortId})

}
const getTheUrl = async (req,res) =>{
    const Id = req.params.id;
    const entry = await URL.findOneAndUpdate({
        shortId: Id
    },{
        $push:{
            visitHistory:{
                timestamp: Date.now()
            }
        }
    })
    // return res.json({entry})
    res.redirect(entry.redirectURL)
}

module.exports = {
    generateNewShortUrl,
    getTheUrl
}