const localProps = (req, res, next) => {

    res.locals.isAuth = !!req.session?.isAuth;
    res.locals.user = req.session?.user || null;
    res.locals.errors = req.flash('errors') || null;

    next();
};

module.exports = localProps;

