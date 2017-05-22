var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content from public folder
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))


// Set up handlebars use
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Import routes from controllers folder so Server.js can make use of them
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function() {
 console.log("Listening at " + PORT);
});
