const uploadMethods = {};
const fs = require("fs");
const xml2js = require("xml2js");
const Appretice = require("../models/Appretice");
const Instructor = require("../models/Instructor");
const Rol = require("../models/Rol");
const User = require("../models/User");
const Solocity = require("../models/Solocity");
const userRoles = require("../config/userRoles");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);
const parser = new xml2js.Parser();

async function saveAppretices(arr) {
    var totalSaved = 0;
    var totalRefused = 0;
    for (i in arr) {
        const actualAppretice = arr[i];
        const appreticeProgram = {
            codigo_sede: actualAppretice.CODIGO_SEDE,
            sede: actualAppretice.SEDE,
            codigo_regional: actualAppretice.CODIGO_REGIONAL,
            regional: actualAppretice.REGIONAL,
            ficha: actualAppretice.FICHA,
            estado_ficha: actualAppretice.ESTADO_FICHA,
            codigo_programa: actualAppretice.CODIGO_PROGRAMA,
            version_prograna: actualAppretice.VERSION_PROGRANA,
            programa: actualAppretice.PROGRAMA,
            nivel_de_formacion: actualAppretice.NIVEL_DE_FORMACION,
        };

        const searchIfAppreticeExist = await Appretice.findOne({
            numero_documento: actualAppretice.NUMERO_DOCUMENTO,
        });
        if (searchIfAppreticeExist) {
            let userActualPrograms = searchIfAppreticeExist.programas_formacion;
            let addProgram = true;
            userActualPrograms.map((program) => {
                if (program.ficha == appreticeProgram.ficha) {
                    addProgram = false;
                }
            });

            if (addProgram) {
                userActualPrograms.push(appreticeProgram);
                const saveAppretice = await searchIfAppreticeExist.updateOne({
                    programas_formacion: userActualPrograms,
                });
                if (saveAppretice) {
                    totalSaved += 1;
                } else {
                    totalRefused += 1;
                }
            } else {
                totalRefused += 1;
            }
        } else {
            const programAppretice = [appreticeProgram];
            const appretice = new Appretice({
                programas_formacion: programAppretice,
                tipo_documento: actualAppretice.TIPO_DOCUMENTO,
                numero_documento: actualAppretice.NUMERO_DOCUMENTO,
                nombre: actualAppretice.NOMBRE,
                primer_apellido: actualAppretice.PRIMER_APELLIDO,
                segundo_apellido: actualAppretice.SEGUNDO_APELLIDO,
                estado_aprendiz: actualAppretice.ESTADO_APRENDIZ,
            });
            const savedAppretice = await appretice.save();
            if (savedAppretice) {
                totalSaved += 1;
            } else {
                totalRefused += 1;
            }
        }
    }

    return {
        Success: totalSaved,
        Failure: totalRefused,
    };
}

uploadMethods.uploadAppretices = async (req, res) => {
    if (req.file) {
        const uri = "../api/assets/XML/" + req.file.filename;
        fs.readFile(uri, (err, data) => {
            parser.parseString(data, async (err, result) => {
                const readJxML = result.Workbook.Worksheet[0].Table[0].Row;
                const totalFiles = [];
                readJxML.map((ele) => {
                    totalFiles.push(ele.Cell);
                });
                const totalArray = [];
                totalFiles.map((file, i) => {
                    const actualArray = [];
                    file.map((t) => {
                        actualArray.push(t.Data);
                    });
                    totalArray.push(actualArray);
                });

                const AllRegisters = [];
                for (i in totalArray) {
                    const actualJSON = {
                        CODIGO_SEDE: totalArray[i][0][0]._,
                        SEDE: totalArray[i][1][0]._,
                        CODIGO_REGIONAL: totalArray[i][2][0]._,
                        REGIONAL: totalArray[i][3][0]._,
                        FICHA: totalArray[i][4][0]._,
                        ESTADO_FICHA: totalArray[i][5][0]._,
                        CODIGO_PROGRAMA: totalArray[i][6][0]._,
                        VERSION_PROGRANA: totalArray[i][7][0]._,
                        PROGRAMA: totalArray[i][8][0]._,
                        NIVEL_DE_FORMACION: totalArray[i][9][0]._,
                        TIPO_DOCUMENTO: totalArray[i][10][0]._,
                        NUMERO_DOCUMENTO: totalArray[i][11][0]._,
                        NOMBRE: totalArray[i][12][0]._,
                        PRIMER_APELLIDO: totalArray[i][13][0]._,
                        SEGUNDO_APELLIDO: totalArray[i][14][0]._,
                        ESTADO_APRENDIZ: totalArray[i][15][0]._,
                    };
                    if (actualJSON.ESTADO_FICHA == "En ejecucion") {
                        AllRegisters.push(actualJSON);
                    }
                }

                const getData = await saveAppretices(AllRegisters);
                await unlinkAsync(req.file.path);
                return res.json({
                    status: true,
                    total: getData,
                    message: "Se ha terminado la operación",
                });
            });
        });
    }
};

async function getInstructorRolID() {
    const rolCapacity = userRoles.filter((rol) => {
        return rol.rolCapacity == "instructor";
    });
    const rol = new Object(...rolCapacity);
    const getRoleID = await Rol.findOne({ role_name: rol.name });
    if (getRoleID) {
        return getRoleID._id;
    } else {
        const instructorRol = new Rol({
            role_name: rol.name,
            capacity: rol.rolCapacity,
        });
        const saveRol = await instructorRol.save();
        return saveRol._id;
    }
}

async function saveInstructors(arr) {
    var totalSaved = 0;
    var totalRefused = 0;
    for (i in arr) {
        const actualInstructor = arr[i];
        const instructor = {
            codigo_sede: actualInstructor.CODIGO_SEDE,
            sede: actualInstructor.SEDE,
            codigo_regional: actualInstructor.CODIGO_REGIONAL,
            regional: actualInstructor.REGIONAL,
            tipo_documento: actualInstructor.TIPO_DOCUMENTO,
            numero_documento: actualInstructor.NUMERO_DOCUMENTO,
            nombre: actualInstructor.NOMBRE,
            primer_apellido: actualInstructor.PRIMER_APELLIDO,
            segundo_apellido: actualInstructor.SEGUNDO_APELLIDO,
        };

        const savedInstructor = new Instructor(instructor);
        const findIfExistInstructor = await Instructor.findOne({
            numero_documento: instructor.numero_documento,
        });
        if (!findIfExistInstructor) {
            if (await savedInstructor.save()) {
                const newUser = new User({
                    username: savedInstructor.numero_documento,
                    password: savedInstructor.numero_documento,
                    email: savedInstructor.numero_documento + "@gmail.com",
                    first_name: savedInstructor.nombre,
                    last_name: savedInstructor.primer_apellido,
                    user_role: await getInstructorRolID(),
                });
                newUser.password = await newUser.encryptPassword(newUser.password);
                await newUser.save();
                totalSaved += 1;
            } else {
                totalRefused += 1;
            }
        } else {
            totalRefused += 1;
        }
    }

    return {
        Success: totalSaved,
        Failure: totalRefused,
    };
}

uploadMethods.uploadInstructors = async (req, res) => {
    if (req.file) {
        const uri = "../api/assets/XML/" + req.file.filename;
        fs.readFile(uri, (err, data) => {
            parser.parseString(data, async (err, result) => {
                const readJxML = result.Workbook.Worksheet[0].Table[0].Row;
                const totalFiles = [];
                readJxML.map((ele) => {
                    totalFiles.push(ele.Cell);
                });
                const totalArray = [];
                totalFiles.map((file, i) => {
                    const actualArray = [];
                    file.map((t) => {
                        actualArray.push(t.Data);
                    });
                    totalArray.push(actualArray);
                });

                const AllRegisters = [];
                for (i in totalArray) {
                    const actualJSON = {
                        CODIGO_SEDE: totalArray[i][0][0]._,
                        SEDE: totalArray[i][1][0]._,
                        CODIGO_REGIONAL: totalArray[i][2][0]._,
                        REGIONAL: totalArray[i][3][0]._,
                        TIPO_DOCUMENTO: totalArray[i][4][0]._,
                        NUMERO_DOCUMENTO: totalArray[i][5][0]._,
                        NOMBRE: totalArray[i][6][0]._,
                        PRIMER_APELLIDO: totalArray[i][7][0]._,
                        SEGUNDO_APELLIDO: totalArray[i][8][0]._,
                    };
                    if (i != 0) {
                        AllRegisters.push(actualJSON);
                    }
                }
                const getData = await saveInstructors(AllRegisters);
                await unlinkAsync(req.file.path);
                return res.json({
                    status: true,
                    total: getData,
                    message: "Se ha terminado la operación",
                });
            });
        });
    }
};

uploadMethods.uploadSolicityFiles = async (req, res) => {
    if (req.files) {
        const solicityID = req.headers['solicityid'];
        if (!solicityID) {
            const newSolicity = new Solocity({
                userID: req.userID,
                attachFiles: req.files,
            });

            if (await newSolicity.save()) {
                return res.status(200).json({
                    status: true,
                    solicity: newSolicity,
                });
            } else {
                return res.status(400).json({
                    status: false,
                    message: "There was an error",
                });
            }
        } else {
            const findB = {_id: solicityID}
            const getSolicity = await Solocity.findOne(findB);

            if (getSolicity) {
                let pushFiles = [];
                getSolicity.attachFiles.map(ele => {
                    pushFiles.push(ele);
                })
                const newFiles = new Object(...req.files);
                pushFiles.push(newFiles);

                await getSolicity.update({ $set: { attachFiles: pushFiles } });
                const getSolicityUpdate = await Solocity.findOne(findB);
                return res.status(200).json({
                    status: true,
                    solicity: getSolicityUpdate,
                });
            } else {
                return res.status(400).json({
                    status: false,
                    message: "The solicity not exist",
                });
            }
        }
    }
};

module.exports = uploadMethods;
