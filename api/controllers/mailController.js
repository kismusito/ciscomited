const mailMethods = {};

mailMethods.test = async (req, res) => {
    return res.json({
        response: true,
    });
};

module.exports = mailMethods;
