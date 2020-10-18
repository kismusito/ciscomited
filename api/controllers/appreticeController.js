const appreticeMethods = {};
const Appretice = require("../models/Appretice");

appreticeMethods.getAppreticeInfo = async (req, res) => {
    const { appreticeID } = req.body;
    if (appreticeID) {
        const appreticeCred = { _id: appreticeID };
        const getAppretice = await Appretice.findOne(appreticeCred);
        if (getAppretice) {
            return res.json({
                status: true,
                appretice: getAppretice,
            });
        } else {
            return res.json({
                status: false,
                message: "No info found",
            });
        }
    } else {
        return res.json({
            status: false,
            message: "No appretice id sent",
        });
    }
};

appreticeMethods.saveAppreticeInfo = async (req, res) => {
    const { appreticeID, email, phone } = req.body;
    const getAppretice = await Appretice.findOne({ _id: appreticeID });
    if (getAppretice) {
        const saveAppretice = await getAppretice.update({
            $set: {
                email: email,
                phone: phone,
            },
        });

        if (saveAppretice) {
            return res.json({
                status: true,
                message: "Aprendiz actualizado",
            });
        } else {
            return res.json({
                status: false,
                message: "Ha ocurrido un error",
            });
        }
    } else {
        return res.json({
            status: false,
            message: "Ha ocurrido un error",
        });
    }
};

module.exports = appreticeMethods;
