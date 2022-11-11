const router = require('express').Router()
const {User, Show} = require('../db/models')
const {showIdValidator, genreIdValidator, ratingValidator, statusValidator} = require('../validation/shows')

router.get('/', async (req, res, next) => {
    let shows = await Show.findAll()
    res.json({status: "success", shows})
})

router.get('/:showId', showIdValidator, async (req, res, next) => {
    let show = await Show.findByPk(req.params.showId)
    if (show == null) {
        res.status(404).json({status: "fail", error: "Show not found"})
    } else {
        res.json({
            status: "success",
            ... show.dataValues
        })
    }
})

router.get('/genres/:genreId', genreIdValidator, async (req, res, next) => {
    let shows = await Show.findAll({
        where: {
            genre: req.params.genreId
        }
    })
    res.json({status: "success", shows})
})

router.put('/:showId/rating/:rating', showIdValidator, ratingValidator, async (req, res, next) => {
    await Show.update({
        rating: req.params.rating
    }, {
        where: {
            id: req.params.showId
        }
    })
    res.json({status: "success"})
})

router.put('/:showId/status/:status', showIdValidator, statusValidator, async (req, res, next) => {
    await Show.update({
        status: req.params.status
    }, {
        where: {
            id: req.params.showId
        }
    })
    res.json({status: "success"})
})

router.delete('/:showId', showIdValidator, async (req, res, next) => {
    await Show.destroy({
        where: {
            id: req.params.showId
        }
    })
    res.json({status: "success"})
})

module.exports = router
