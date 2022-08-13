const Profile = require('../../models/profile');

module.exports = {
    profile,
    index,
    create,
}
async function profile(req, res) {
    const profile = await Profile.findOne({user: req.user._id});
    res.json(profile);
    console.log("Profile from Controller: ", profile);
}


async function index(req, res) {
    const profiles = await Profile.find({});
    console.log("Index from Controller: ", profiles);
    res.json(profiles);
}

async function create(req, res) {
    console.log(req.body);
    const profile = await Profile.create(req.body);
    console.log("Create from Controller: ", profile);
    res.json(profile);
}