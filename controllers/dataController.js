const Log = require('../models/log')

const dataController = {
    //INDEX
    index(req, res, next) {
        
    },

    //NEW - doesn't actually connect to DB so nothing needed here

    //DELETE
    delete(req, res, next) {

    },

    //UPDATE
    update(req, res, next) {

    },

    //CREATE
    create(req, res, next) {

    },

    //EDIT - basically the same as show, we're just displaying the
    //       edit form instead. Doesn't need its own DB route
    //SHOW
    show(req, res, next) {

    }

}

module.exports = dataController