const rolMethods = {}
const Rol = require('../models/Rol')

rolMethods.getAllRols = async (req , res) => {
    const roles = await Rol.find()
    if (roles) {
        return res.json({
            status: true,
            body: roles,
            message: "Roles found" 
        })
    } else {
        return res.json({
            status: false,
            body: null,
            message: "No rols found" 
        })
    }
}

rolMethods.addNewRol = async (req , res) => {
    const {name , isAdmin} = req.body
    const addRol = new Rol({
        role_name: name , 
        isAdmin
    })
    if(addRol.save()) {
        return res.json({
            status: true,
            message: "El rol fue creado correctamente"
        })
    } else {
        return res.json({
            status: false,
            message: "Hubo un error al crear el rol"
        })
    }
}

module.exports = rolMethods