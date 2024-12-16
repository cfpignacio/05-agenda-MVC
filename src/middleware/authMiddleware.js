

authMiddleware = (req, res, next) => {
    if(!req.session?.isAuth){   
        res.render('auth/login', {isAuth : req.session.isAuth , fullName: req.session.fullName, email: req.session.email,error:'Necesitas estar autenticado!!'})
    }
    next();
}

module.exports = {
    authMiddleware
}