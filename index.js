const express = require("express");
const exphbs = require("express-handlebars");
const mainRoutes = require('./routes/main');

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(mainRoutes);

app.listen(PORT, () => {
  console.log('Server has been started...');
});
