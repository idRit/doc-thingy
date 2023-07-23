const userDetailsModel = require('../models/user-details');

const sections = [
  'general',
  'housing',
  'diagnosis_comorbodities_map',
  'history',
  'symptoms',
  'fatigue',
  'vaccination_details',
  'o_a',
  'posture',
  'medication',
  'investigations',
  'physical_activities',
  'rehab_goals',
  'crdq',
];

exports.getSections = async (req, res) => {
  return res.status(200).send({ sections });
},

exports.createUser = async (req, res) => {
  const userDetails = new userDetailsModel({
    general: req.body,
  });

  try {
    const data = await userDetails.save();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating the User.",
    });
  }
};

exports.editUser = async (req, res) => {
  const id = req.params.user_id;

  if (sections.indexOf(req.params.section) === -1) {
    return res.status(400).send({
      message: "Invalid section",
    });
  }

  try {
    await userDetailsModel.updateOne({ _id: id }, { [req.params.section]: req.body });
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while retrieving user.",
    });
  }
};

exports.getUser = async (req, res) => {
  const id = req.params.user_id;

  try {
    const data = await userDetailsModel.findOne({ _id: id });
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while retrieving user.",
    });
  }
};

exports.searchUser = async (req, res) => {
  const name = req.params.name;

  try {
    const data = await userDetailsModel.find({ "general.name": { $regex: name, $options: "i" } });
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while retrieving user.",
    });
  }
}
