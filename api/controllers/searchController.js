const searchMethods = {};
const Appretice = require("../models/Appretice");

async function searchByParams(param, typeParam) {
    let search = [];
    switch (typeParam) {
        case "document":
            return (search = await Appretice.find(
                { numero_documento: { $regex: param, $options: "i" } },
                { nombre: true, primer_apellido: true, numero_documento: true }
            ).limit(7));
        case "user":
            return (search = await Appretice.find(
                { nombre: { $regex: param, $options: "i" } },
                { nombre: true, primer_apellido: true, numero_documento: true }
            ).limit(7));
        default:
            return [];
    }
}

searchMethods.searchAppretices = async (req, res) => {
    const { searchValue, type } = req.body;
    if (searchValue.length > 0) {
        const searchAppretices = await searchByParams(searchValue, type);
        if (searchAppretices) {
            return res.json({
                status: true,
                appretices: searchAppretices,
                message: "Se han encontrado",
            });
        } else {
            return res.json({
                status: false,
                message: "No se han encontrado",
            });
        }
    } else {
        return res.json({
            status: false,
            message: "Búsqueda vacia",
        });
    }
};

searchMethods.searchAppretice = async (req, res) => {
    const { appretice } = req.body;
    if (appretice) {
        const getSearchedAppretice = await Appretice.findOne({ _id: appretice });
        if (getSearchedAppretice) {
            return res.json({
                status: true,
                appretice: getSearchedAppretice,
                message: "Success",
            });
        } else {
            return res.json({
                status: false,
                message: "No found",
            });
        }
    } else {
        return res.json({
            status: false,
            message: "No found",
        });
    }
};

module.exports = searchMethods;
