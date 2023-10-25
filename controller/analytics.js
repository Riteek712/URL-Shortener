const URL = require('../model/url')

const getAnalyticsByID = async (req,res) =>{
    const id = req.params.id ;
    const gurl = await URL.findOne({
        shortId: id
    })

    return res.json({
        totalClicks : gurl.visitHistory.length,
        analytics: gurl.visitHistory
    })
}

module.exports = {getAnalyticsByID}