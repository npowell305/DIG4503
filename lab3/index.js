const Express = require("express");
const App = Express();
const port = 80;


App.use("/public", Express.static("public"));
App.get("/public", function(req, res){
    res.send("Hello World!");
});
App.listen(port, ){
    console.log("server running");
}

));