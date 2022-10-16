const RESOURCE_PATH = '/logs'

const viewController = {
    //INDEX
    index (req, res, next) {
        res.render('logs/Index', res.locals.data)
    },

    //NEW
    newView (req, res, next) {
        res.render('logs/New')
    },

    //EDIT
    editView (req, res, next) {
        res.render('logs/Edit', res.locals.data)
    },

    //SHOW
    show (req, res, next) {
        res.render('logs/Show', res.locals.data)
    },

    //REDIRECT USER TO HOME PAGE
    redirectHome (req, res, next) {
        res.redirect(RESOURCE_PATH)
    },

    //REDIRECT USER TO SHOW PAGE
    redirectShow (req, res, next) {
        res.redirect(`${RESOURCE_PATH}/${res.locals.data.log._id}`)
    }
}

module.exports = viewController