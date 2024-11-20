
homeViewController = (req, res) => {
    res.render('home',{title:'Home 🏠'})
}
saludoViewController = (req, res) => {
    res.render('saludo',{title:'Saludo 👋'})
}




module.exports = {
    homeViewController,
    saludoViewController
};