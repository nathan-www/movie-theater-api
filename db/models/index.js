const { Show } = require('./Show')
const { User } = require('./User')

Show.belongsToMany(User, { through: 'ShowsWatched' })
User.belongsToMany(Show, { through: 'ShowsWatched' })

module.exports = {Show, User}
