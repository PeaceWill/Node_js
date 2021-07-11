const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const methodOverride = require('method-override');
const path = require("path");

const route = require("./routes");
const db = require("./config/db/");

// Connect db
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(methodOverride('_method'));
// app.use(morgan('combined'))

// Temp plate engine
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
