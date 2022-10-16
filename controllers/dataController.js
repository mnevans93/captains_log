const {update} = require('../models/log')
const Log = require('../models/log')

const checkForError = (err) => {
    if (err) {
        res.status(400).send({msg: err.message})
        return true
    } else {return false}
}

const dataController = {
    //INDEX
    index (req, res, next) {
        Log.find({}, (err, foundLogs) => {
            if (checkForError(err) === false) {
                res.locals.data.logs = foundLogs
                next()
            }
        })
    },

    //NEW - doesn't actually connect to DB so nothing needed here

    //DELETE
    delete (req, res, next) {
        Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
            if (checkForError(err) === false) {
                res.locals.data.log = deletedLog
                next()
            }
        })
    },

    //UPDATE
    update (req, res, next) {
        req.body.isShipBroken = req.body.isShipBroken === 'on'? true : false
        Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog) => {
            if (checkForError(err) === false) {
                res.locals.data.log = updatedLog
                next()
            }
        })
    },

    //CREATE
    create (req, res, next) {
        req.body.isShipBroken = req.body.isShipBroken === 'on' ? true : false
        Log.create(req.body, (err, createdLog) => {
            if (checkForError(err) === false) {
                res.locals.data.log = createdLog
                next()
            }
        })
    },

    //EDIT - basically the same as show, we're just displaying the
    //       edit form instead. Doesn't need its own DB route
    //SHOW
    show (req, res, next) {
        Log.findById(req.params.id, (err, foundLog) => {
            if (checkForError(err) === false) {
                res.locals.data.log = foundLog
                next()
            }
        })
    }

}

module.exports = dataController