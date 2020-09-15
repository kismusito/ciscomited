const generatePDF = {};
const pdf = require("html-pdf");
const Appretice = require("../models/Appretice");
const Citations = require("../models/Citations");
const domain = require("../config/domain");

function generateRamdomPDF(n) {
    let ramdomCode = "";
    const posibleCharacters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i <= n; i++) {
        const generate = Math.random() * (1, posibleCharacters.length) + 1;
        ramdomCode += posibleCharacters.charAt(generate);
    }
    ramdomCode += ".pdf";
    return ramdomCode;
}

function generatePDFLayout(appreticesSelected, leader, date, hour, meetingLink) {
    const appretices = appreticesSelected;

    const dateSelected = new Date(date);
    const hourSelected = new Date(hour);
    const convertedHour =
        hourSelected.getHours() +
        ":" +
        (hourSelected.getMinutes() < 10
            ? "0" + hourSelected.getMinutes()
            : hourSelected.getMinutes()) +
        (hourSelected.getHours() <= 12 ? " AM" : " PM");

    var month = "";
    switch (dateSelected.getMonth() + 1) {
        case 1:
            month = "Enero";
            break;
        case 2:
            month = "Febrero";
            break;
        case 3:
            month = "Marzo";
            break;
        case 4:
            month = "Abril";
            break;
        case 5:
            month = "Mayo";
            break;
        case 6:
            month = "Junio";
            break;
        case 7:
            month = "Julio";
            break;
        case 8:
            month = "Agosto";
            break;
        case 9:
            month = "Septiembre";
            break;
        case 10:
            month = "Octubre";
            break;
        case 11:
            month = "Noviembre";
            break;
        case 12:
            month = "Diciembre";
            break;
    }

    const fichas = appretices.map((f) => {
        return f.ficha;
    });
    const uniqFichas = new Set(fichas);

    const sedes = appretices.map((f) => {
        return f.sede;
    });
    const uniqSedes = new Set(sedes);

    let appreticesHtml = "<ul style='list-style: none; margin:0; padding:0'>";
    appretices.map((appretice) => {
        appreticesHtml += "<li style='margin: 10px 0'>";
        appreticesHtml += "<div>" + appretice.name + "</div>";
        appreticesHtml += "<div>" + appretice.document + "</div>";
        if ([...uniqFichas].length > 1) {
            appreticesHtml += "<div>Ficha: " + appretice.ficha + "</div>";
        }

        if ([...uniqSedes].length > 1) {
            appreticesHtml += "<div>Sede: " + appretice.sede + "</div>";
        }
        appreticesHtml += "</li>";
    });

    if ([...uniqFichas].length == 1) {
        appreticesHtml += "<li>Ficha: " + [...uniqFichas][0] + "</li>";
    }

    if ([...uniqSedes].length == 1) {
        appreticesHtml += "<li>Sede: " + [...uniqSedes][0] + "</li>";
    }
    appreticesHtml += "<ul>";

    appreticesHtml += "<br>";

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body style="font-family: Arial, Helvetica, sans-serif; font-size: .8em">
        <div style="padding: 0px 60px">
           
            <div id="pageFooter" style="text-align: center; font-size: .7em; color: #FF842A">
                <div>Centro Tecnológico del Mobiliario</div>
                <div>Dirección: Calle 63 No. 58B-03, Itaguí. - PBX (57 4) 576000</div>
                <div>www.sena.edu.co</div>
                <div>SENAComunica</div>
            </div>

            <div id="pageHeader" style="text-align: center; font-size: .7em; color: #FF842A; margin-top: 20px">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1045px-Sena_Colombia_logo.svg.png" alt="logo sena" style="width: 70px; height: auto; float: left; margin-left: 60px" />
                <img src="https://www.mintrabajo.gov.co/image/journal/article?img_id=60724738&t=1572456922228&fileName=logo-gobierno-duque.png" style="width: 150px; height: 30px; float: right; margin-top: 22px; margin-right: 60px" alt="logo min trabajo" />
            </div>

            <div style="width: 100%;text-align: center">
                Itagüí,
            </div>
    
            <div style="margin-top: 20px;">Aprendices</div>
            <div style="margin: 0; padding: 0">
                ${appreticesHtml}
            </div>
            <div>Asunto: Citación Comité de Evaluación y Seguimiento</div>
    
            <p>Por medio de esta comunicación, le informamos que la Instructora líder ${leader}, ha solicitado que se le convoque a un comité de evaluación y seguimiento debido a incumplimiento con el reglamento al aprendiz.</p>
    
            <p>Dichos comportamientos constituyen falta al Reglamento del Aprendiz, que establece: <strong>CAPITULO III DEBERES DEL APRENDIZ SENA. ARTÍCULO 9o. </strong> “Se entiende por deber, la obligación legal, social y moral que compromete a la persona a cumplir condeterminada actuación, asumiendo con responsabilidad todos sus actos, para propiciar la armonía, el respeto, la integración, el bienestar común, la sana convivencia, el servicio a los demás, la seguridad de las personas y de los bienes de la institución. Son deberes del aprendiz SENA durante el proceso de ejecución de la formación, los siguientes numerales: <strong>13</strong> “Conocer y asumir las políticas y directrices institucionales establecidas, así como el Reglamento del Aprendiz SENA, y convivir en comunidad de acuerdo con ellos”</p>
            
            <p>Por lo anterior, y ante la situación actual del país con la emergencia sanitaria y de confinamiento obligatorio, y de las medidas ordenadas por el Decreto 457 de 22 de marzo de 2020; en consonancia con lo prescrito en el Artículo 63 de la Ley 1437 de 2011, que reza así; “<strong>ARTÍCULO 63. SESIONES VIRTUALES</strong>. Los comités, consejos, juntas y demás organismos colegiados en la organización interna de las autoridades, podrán deliberar, votar y decidir en conferencia virtual, utilizando los medios electrónicos idóneos y dejando constancia de lo actuado por ese mismo medio con los atributos de seguridad necesarios”, se le está citando a Comité de Evaluación y Seguimiento, que <strong>se realizará el ${dateSelected.getDate()} de ${month} de ${dateSelected.getFullYear()} a las ${convertedHour}.</strong></p>
    
            <p>Para el efecto será contactada diez minutos antes del inicio de la sesión por medios virtuales de la plataforma TEAMS de Gmail con el siguiente link: <a href="${meetingLink}" target="_blank">Clic Aquí</a>. si no tiene acceso le realizaremos videollamada a su número de contacto registrado en la Plataforma Sofíaplus, para ello, Usted puede elaborar y entregar por escrito el informe de descargos, anexando las pruebas correspondientes con anterioridad o aportarlas en el desarrollo de la sesión.</p>
    
            <p>Atentamente,</p>
    
            <div style="margin-top: 50px;padding-left: 230px;">
    
                <div>
                    <strong>Elkin Darío Tobón Tamayo</strong>
                    <div>Subdirector</div>
                    <div>Centro Tecnológico del Mobiliario</div>
                </div>
            </div>
            <div style="margin-top: 50px; font-size: .7em">
                <sub style="display: block">CC. Comité de Evaluación y Seguimiento - <a href="#">ComiteAprendices@sena.edu.co</a></sub>
                <sub style="display: block">Proyectó: Edén Natalia Álvarez</sub>
                <sub style="display: block">Vo. Bo. Gloria Sánchez</sub>
                <sub style="display: block">Revisó: Luis Fernando Vallejo</sub>
            </div>
    
        </div>
    </body>
    
    </html>
    `;

    return html;
}

function generatePDFLayoutMinutes(appreticesSelected, date, hour, content) {
    const appretices = appreticesSelected;

    const dateSelected = new Date(date);
    const hourSelected = new Date(hour);
    const convertedHour =
        hourSelected.getHours() +
        ":" +
        (hourSelected.getMinutes() < 10
            ? "0" + hourSelected.getMinutes()
            : hourSelected.getMinutes()) +
        (hourSelected.getHours() <= 12 ? " AM" : " PM");

    var month = "";
    switch (dateSelected.getMonth() + 1) {
        case 1:
            month = "Enero";
            break;
        case 2:
            month = "Febrero";
            break;
        case 3:
            month = "Marzo";
            break;
        case 4:
            month = "Abril";
            break;
        case 5:
            month = "Mayo";
            break;
        case 6:
            month = "Junio";
            break;
        case 7:
            month = "Julio";
            break;
        case 8:
            month = "Agosto";
            break;
        case 9:
            month = "Septiembre";
            break;
        case 10:
            month = "Octubre";
            break;
        case 11:
            month = "Noviembre";
            break;
        case 12:
            month = "Diciembre";
            break;
    }

    const fichas = appretices.map((f) => {
        return f.ficha;
    });
    const uniqFichas = new Set(fichas);

    const sedes = appretices.map((f) => {
        return f.sede;
    });
    const uniqSedes = new Set(sedes);

    let appreticesHtml = "<ul style='list-style: none; margin:0; padding:0'>";
    appretices.map((appretice) => {
        appreticesHtml += "<li style='margin: 10px 0'>";
        appreticesHtml += "<div>" + appretice.name + "</div>";
        appreticesHtml += "<div>" + appretice.document + "</div>";
        if ([...uniqFichas].length > 1) {
            appreticesHtml += "<div>Ficha: " + appretice.ficha + "</div>";
        }

        if ([...uniqSedes].length > 1) {
            appreticesHtml += "<div>Sede: " + appretice.sede + "</div>";
        }
        appreticesHtml += "</li>";
    });

    if ([...uniqFichas].length == 1) {
        appreticesHtml += "<li>Ficha: " + [...uniqFichas][0] + "</li>";
    }

    if ([...uniqSedes].length == 1) {
        appreticesHtml += "<li>Sede: " + [...uniqSedes][0] + "</li>";
    }
    appreticesHtml += "<ul>";

    appreticesHtml += "<br>";

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body style="font-family: Arial, Helvetica, sans-serif; font-size: .8em">
        <div style="width: 100%; border: 1px solid #D4D4D4;">
            <div style="border-bottom: 1px solid #D4D4D4; text-align: center;">
                <span>ACTA Voceros</span>
            </div>
    
            <div style="border-bottom: 1px solid #D4D4D4; padding: 5px 0 20px 5px;">
                <strong>NOMBRE DEL COMITÉ O DE LA REUNIÓN: <span>Comité de Evaluación y Seguimiento</span></strong>
            </div>
    
            <table style="width: 100%; border-bottom: 1px solid #D4D4D4;">
                <tr style="width: 100%;">
                    <td style="width: 55%; border-right: 1px solid #D4D4D4;padding: 5px 0 20px 5px;"">CIUDAD Y FECHA: Itagui, <br> 15 de Mayo de 2020</td>
                <td style=" width: 20%; border-right: 1px solid #D4D4D4;padding: 5px 0 20px 5px;"">HORA INICIO: 1:45 P.M
                    </td>
                    <td style="width: 20%; padding: 5px 0 20px 5px;">HORA FIN:</td>
                </tr>
            </table>
    
            <table style="width: 100%; border-bottom: 1px solid #D4D4D4;">
                <tr style="width: 100%;">
                    <td style="width: 57.7%; border-right: 1px solid #D4D4D4;padding: 5px 0 20px 5px;">LUGAR: Sala VIRTUAL
                    </td>
                    <td style=" border-right: 1px solid #D4D4D4;padding: 5px 0 20px 5px;">DIRECCIÓN GENERAL / REGIONAL /
                        CENTRO</td>
                </tr>
            </table>
    
            <div style="border-bottom: 1px solid #D4D4D4; padding: 5px 0 20px 5px;">
                <strong>TEMA (S):</strong>
    
                <ul>
                    <li>Inconformidades con la formación: coordinadores</li>
                    <li>Inconformidades con la formación: coordinadores</li>
                    <li>Inconformidades con la formación: coordinadores</li>
                    <li>Inconformidades con la formación: coordinadores</li>
                </ul>
            </div>
    
            <div style="border-bottom: 1px solid #D4D4D4; padding: 5px 0 20px 5px;">
                <strong>OBJETIVO(S) DE LA REUNIÓN:</strong> <br>
                <span>Dar respuesta a las preguntas más frecuentes de los aprendices al equipo administrativo y de
                    coordinadores</span>
            </div>
    
            <div style="border-bottom: 1px solid #D4D4D4; text-align: center; padding: 5px 0;">
                <span>DESARROLLO DE LA REUNIÓN</span>
            </div>
    
            <div style="border-bottom: 1px solid #D4D4D4; padding: 5px 0 20px 5px;">
                ${content}
            </div>
    
            <div style="border-bottom: 1px solid #D4D4D4; padding: 5px 0 20px 5px;">
            </div>
    
            <div style="border-bottom: 1px solid #D4D4D4; text-align: center; padding: 5px 0;">
                <span>COMPROMISOS</span>
            </div>
    
            <table style="width: 100%; border-bottom: 1px solid #D4D4D4;">
                <tr style="width: 100%;">
                    <td style="width: 55%; border-right: 1px solid #D4D4D4;padding: 5px 0 20px 5px;"">ACTIVIDAD</td>
               <td style=" width: 20%; border-right: 1px solid #D4D4D4;padding: 5px 0 20px 5px;"">RESPONSABLE</td>
                    <td style="width: 20%; padding: 5px 0 20px 5px;">FECHA</td>
                </tr>
            </table>
    
            <table style="width: 100%; border-bottom: 1px solid #D4D4D4;">
                <tr style="width: 100%;">
                    <td style="width: 55%; border-right: 1px solid #D4D4D4;padding: 5px 0 20px 5px;"">s</td>
                <td style=" width: 20%; border-right: 1px solid #D4D4D4;padding: 5px 0 20px 5px;"">s</td>
                    <td style="width: 20%; padding: 5px 0 20px 5px;">s</td>
                </tr>
            </table>
    
            <table style="width: 100%; border-bottom: 1px solid #D4D4D4;">
                <tr style="width: 100%;">
                    <td style="width: 55%; border-right: 1px solid #D4D4D4;padding: 5px 0 20px 5px;"">s</td>
               <td style=" width: 20%; border-right: 1px solid #D4D4D4;padding: 5px 0 20px 5px;"">s</td>
                    <td style="width: 20%; padding: 5px 0 20px 5px;">s</td>
                </tr>
            </table>
    
            <div style="border-bottom: 1px solid #D4D4D4; text-align: center; padding: 5px 0;">
                ${appreticesHtml}
            </div>
    
        </div>
    </body>
    
    </html>
    `;

    return html;
}

function getFormationPrograms(programs) {
    let programData = {
        ficha: "",
        sede: "",
    };
    programs.map((pro, i) => {
        programData.ficha += pro.ficha + (i != 1 ? " - " : "");
        programData.sede += pro.sede + (i != 1 ? " - " : "");
    });
    return programData;
}

async function getInfoByAppretice(ID) {
    const userGet = await Appretice.findOne({ _id: ID });
    const getProgramInfo = getFormationPrograms(userGet.programas_formacion);
    const userProgramInfo = {
        name: userGet.nombre + " " + userGet.primer_apellido,
        document: userGet.numero_documento,
        ficha: getProgramInfo.ficha,
        sede: getProgramInfo.sede,
    };
    return userProgramInfo;
}

async function getAppreticesInfo(appretices) {
    let allUserData = [];
    for (i in appretices) {
        const getInfo = await getInfoByAppretice(appretices[i].appreticeID);
        allUserData.push(getInfo);
    }
    return allUserData;
}

generatePDF.generateCitation = async (req, res) => {
    const { leader, appretices, date, hour, description, meetingLink } = req.body;
    const getAppretices = await getAppreticesInfo(appretices);
    const html = generatePDFLayout(getAppretices, leader, date, hour, meetingLink);
    const pdfNameRamdom = generateRamdomPDF(40);
    pdf.create(html).toFile("assets/Citations/" + pdfNameRamdom, (err, resoponse) => {
        if (err) {
            return res.json({
                status: false,
                message: "PDF error",
            });
        } else {
            const saveCitation = new Citations({
                userID: req.userID,
                pdfLink: pdfNameRamdom,
                description: description,
            });

            saveCitation.lastChange = saveCitation._id;
            saveCitation.parentID = saveCitation._id;

            if (saveCitation.save()) {
                return res.json({
                    status: true,
                    pdfLink: domain + "Citations/" + pdfNameRamdom,
                    message: "PDF Generated",
                });
            } else {
                return res.json({
                    status: false,
                    message: "PDF error",
                });
            }
        }
    });
};

generatePDF.generateMinute = async (req, res) => {
    const { appretices, date, hour, content } = req.body;
    const getAppretices = await getAppreticesInfo(appretices);
    const html = generatePDFLayoutMinutes(getAppretices, date, hour, content);
    const pdfNameRamdom = generateRamdomPDF(40);

    pdf.create(html).toFile("assets/Minutes/Voceros/" + pdfNameRamdom, (err, resoponse) => {
        if (err) {
            return res.json({
                status: false,
                message: "PDF error",
            });
        } else {
            const saveCitation = new Citations({
                userID: req.userID,
                pdfLink: pdfNameRamdom,
                description: "Acta generated",
            });

            saveCitation.lastChange = saveCitation._id;
            saveCitation.parentID = saveCitation._id;

            if (saveCitation.save()) {
                return res.json({
                    status: true,
                    pdfLink: domain + "Minutes/Voceros/" + pdfNameRamdom,
                    message: "PDF Generated",
                });
            } else {
                return res.json({
                    status: false,
                    message: "PDF error",
                });
            }
        }
    });
};

module.exports = generatePDF;
