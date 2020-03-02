const MongoClient = require("mongodb").MongoClient;

const URL = "mongodb+srv://nicholaspowell:qNkh2B1MYCFvhaIc@cluster0-tc9sb.mongodb.net/";

class Database {
    constructor(){

        
    }

}

MongoClient.connect(URL , function(error, connection) {{

    if(error) {
        throw error;
    }

    let database = connection.db("DIG4503-78");
    let collection = databse.collection("movies");

    console.log(collection);

    connection.close();
}

});