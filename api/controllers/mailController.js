const mailMethods = {};
const nodemailer = require("nodemailer");
require("dotenv").config();

mailMethods.test = async (req, res) => {

    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const destinatary = await transport.sendMail({
        from: '"Ciscomited 👻" <kismuteama@gmail.com>',
        to: "kismu35891@gmail.com",
        subject: "Test email",
        attachments: [{
            filename: "test.pdf",
            path: "http://localhost:4000/Minutes/voceros/U2D33LC9GDEYOUU32O2JDJC66U4UHA5GNUJGA8AC.pdf"
        }],
        text: "This is a test message",
        html: "<b>Hello world?</b>",
    });

    return res.json({
        response: destinatary.messageId,
    });
};

mailMethods.createMailType = async ( req , res ) => {

}

mailMethods.createMailConfig = async ( req , res ) => {

}

module.exports = mailMethods;
