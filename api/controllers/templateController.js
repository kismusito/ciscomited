const templateMethods = {};
const Template = require("../models/Template");
const fields = require("../config/fieldPerTemplate");

templateMethods.getFields = async (req, res) => {
    const type = req.params["type"];
    if (type) {
        return res.status(200).json({
            status: true,
            fields: Object.fromEntries(Object.entries(fields[type])),
            message: "Fields encounter",
        });
    } else {
        return res.status(400).json({
            status: false,
            message: "Type is required",
        });
    }
};

templateMethods.getTemplates = async (req, res) => {
    try {
        const templates = await Template.find();
        return res.status(200).json({
            status: true,
            templates: templates,
            message: "Fields encounter",
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: error,
        });
    }
};

templateMethods.create = async (req, res) => {
    const { templateName, template } = req.body;
    const createTemplate = new Template({
        templateName,
        template,
    });

    if (await createTemplate.save()) {
        return res.status(200).json({
            status: true,
            message: "Se ha creado la plantilla",
        });
    } else {
        return res.status(400).json({
            status: false,
            message: "Ha ocurrido un error",
        });
    }
};

templateMethods.updateTemplate = async (req, res) => {}

templateMethods.deleteTemplate = async (req, res) => {}

module.exports = templateMethods;
