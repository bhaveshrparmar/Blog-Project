const mongoose = require("mongoose")
const dbConfig = () => {
    mongoose.connect(process.env.DB_URL)
        .then(() => { console.log("db Connect") })
        .catch((err) => { console.log(err) })
}

module.exports = dbConfig