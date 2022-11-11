const router = require('express').Router()
const {userIdValidator} = require('../validation/users')
const {showIdValidator} = require('../validation/shows')
const {User, Show} = require('../db/models')

router.get('/', async (req, res, next) => {
    let users = (await User.findAll()).map(user => { // Only return non-sensitive user information
        return {id: user.id, username: user.username}
    })
    res.json({status: "success", users})
})

router.get('/:userId', userIdValidator, async (req, res, next) => {
    let user = await User.findByPk(req.params.userId)

    if (user == null) {
        res.status(404).json({status: "fail", error: "User not found"})
    } else {
        res.json({status: "success", id: user.id, username: user.username})
    }
})

router.get('/:userId/watched', userIdValidator, async (req, res, next) => {
    let user = await User.findOne({
        where: {
            id: req.params.userId
        },
        include: [Show]
    })

    if (user == null) {
        res.status(404).json({status: "fail", error: "User not found"})
    } else {
        res.json({status: "success", shows: user.shows})
    }
})

router.put('/:userId/watched/:showId', userIdValidator, showIdValidator, async (req, res, next) => {

    let user = await User.findByPk(req.params.userId)
    let show = await Show.findByPk(req.params.showId)
    await user.addShow(show)

    res.json({status: "success", shows: user.shows})
})

module.exports = router
