const mongoose = require("mongoose");
// console.log(process.env.MONGO_URI)


async function connectMongodb() {
    return mongoose.connect(`${process.env.MONGO_URI}`);
    // .then(()=>{
    //     console.log("mongoDB connected")
    // })
    // .catch((err)=>{
    //     console.log("error while getting connected in database ",err)
    // })

}

module.exports = connectMongodb;