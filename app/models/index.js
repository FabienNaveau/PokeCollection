const Card = require('./Card') 
const Set = require('./Set') 
const User = require('./User')

User.belongsToMany(Set, {
    through: 'user_set',
    foreignKey: 'user_id',
    otherKey: 'set_id'
});
Set.belongsToMany(User, {
    through: 'user_set',
    foreignKey: 'set_id',
    otherKey: 'user_id'
});

Set.hasOne(Card, {
    foreignKey: "set_id"
});
Card.belongsTo(Set);
