const Email = require("../../models/email");
async function postEmail(req, res, next) {
  const newEmail = new Email(req.body);
  try {
    const newRes = await newEmail.save();
    res.status(200).json(req.body);
  } catch (error) {
    next(error);
  }
}
const getEmails = async (req, res, next) => {
  try {
    const emails = await Email.find();
    res.status(200).json(emails);
  } catch (error) {
    next(error);
  }
};

module.exports = { postEmail, getEmails };
