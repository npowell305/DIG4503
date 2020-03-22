const Express = require('express');
const App = Express();
const port = 80;

const cors = require('cors');
App.use(cors());

App.listen(port, () {
    console,log("say beep");
}