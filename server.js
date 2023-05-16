const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3001;
const app = express();

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const models = require('./models');
app.use(controllers);


sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`STOP CRYING`);
})
});