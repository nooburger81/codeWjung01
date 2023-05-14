const User = require('../models/User');
const Stroke = require('../models/Stroke');

User.hasMany(Stroke, {
    foreignKey: "user_id"
});


Stroke.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { User, Stroke };