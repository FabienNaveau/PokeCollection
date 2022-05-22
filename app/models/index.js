const Card = require("./Card")
const Set = require("./Set")
const User = require("./User")

User.hasOne(Set, {
    foreignKey: "user_id"
});
Set.belongsTo(User);

Set.hasOne(Card, {
    foreignKey: "set_id"
});
Card.belongsTo(Set);