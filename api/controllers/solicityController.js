const solicityMethods = {};
const User = require("../models/User");
const Solocity = require("../models/Solocity");
const MotivesOrProhibition = require("../models/MotivesOrProhibitions");

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

solicityMethods.getMotiverOrProhibitions = async (req , res) => {
    const motiverOrProhibitions = await MotivesOrProhibition.find();
    if ( motiverOrProhibitions ) {
        return res.json({
            status: true,
            motiverOrProhibions: motiverOrProhibitions
        })
    } else {
        return res.json({
            status: false,
            message: "Motives or prohibitions not found"
        })
    }
}

solicityMethods.saveMotiveOrProhibition = async (req , res) => {
    const { title , description } = req.body;
    const newMotiveOrProhibition = new MotivesOrProhibition({
        title , description 
    })

    if ( await newMotiveOrProhibition.save()) {
        return res.json({
            status: true,
            message: "El motivo o prohibición ha sido guardado"
        })
    } else {
        return res.json({
            status: false,
            message: "Ha ocurrido un error"
        })
    }
}

module.exports = solicityMethods;
