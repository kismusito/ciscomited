const solicityMethods = {};
const User = require("../models/User");
const Solocity = require("../models/Solocity");

solicityMethods.getDrawSolicity = async (req , res) => {
    const getSolicityDraw = await Solocity.findOne({userID: req.userID , status: false});
    if ( getSolicityDraw ) {
        return res.json({
            status: true,
            solicity: getSolicityDraw
        });
    } else {
        return res.json({
            status: false,
            message: "NO solicities found"
        });
    }
}

module.exports = solicityMethods;
