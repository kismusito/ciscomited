const citationMethods = {}
const fields = require('../config/fieldPerTemplate');

citationMethods.getFields = async ( req , res ) => {
    const type = req.params['type'];
    if ( type ) {
        return res.status(200).json({
            status: true,
            fields: Object.fromEntries(Object.entries(fields[type])),
            message: "Fields encounter"
        })
    } else {
        return res.status(400).json({
            status: false,
            message: "Type is required"
        })
    }
}

module.exports = citationMethods