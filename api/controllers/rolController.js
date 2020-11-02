const rolMethods = {};
const Rol = require("../models/Rol");
const userRoles = require("../config/userRoles");

rolMethods.getAllRols = async (req, res) => {
    const roles = await Rol.find();
    if (roles) {
        return res.json({
            status: true,
            body: roles,
            message: "Roles found",
        });
    } else {
        return res.json({
            status: false,
            body: null,
            message: "No rols found",
        });
    }
};

rolMethods.getRolsCapacities = async (req, res) => {
    return res.json({
        status: true,
        capacities: userRoles,
    });
};

rolMethods.addNewRol = async (req, res) => {
    const { name, capacity } = req.body;
    const addRol = new Rol({
        role_name: name,
        capacity,
    });
    if (addRol.save()) {
        return res.json({
            status: true,
            message: "El rol fue creado correctamente",
        });
    } else {
        return res.json({
            status: false,
            message: "Hubo un error al crear el rol",
        });
    }
};

module.exports = rolMethods;
