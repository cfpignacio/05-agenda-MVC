authMiddleware = (req, res, next) => {
    if (!req.session?.isAuth) {   
        req.flash('errors', 'No estas autorizado');              
        return res.redirect('/login');
    }
    next();
}


module.exports = {
    authMiddleware
}
