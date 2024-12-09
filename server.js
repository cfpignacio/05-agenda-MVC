const express = require('express');
const path = require('path');
const homeRoutes = require('./src/routes/home.routes')
var expressLayouts = require('express-ejs-layouts');
const contactRoutes = require('./src/routes/contact.routes');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const public = path.join(__dirname, 'public');
app.use('/public', express.static(public));

app.set('view engine', 'ejs');
app.use(expressLayouts);

// configuro la ubicacion de las vistas y de el layout
app.set('views', path.join(__dirname,'src/views'))
app.set('layout', path.join(__dirname,'src/views/shared/layout'))

app.use("/",homeRoutes)
app.use("/contact",contactRoutes)

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto: http://localhost:${port}`);
});
