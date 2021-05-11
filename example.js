// example for use "use-mongo.js"

// import module. For use module, you needs for install module "mongodb"
const useMongo = require("./use-mongo.js")

// import dotenv
const dotenv = require("dotenv")
dotenv.config()

// setup
const username = "Node"
const clusterName = "cluster0-ttfss"
const password = process.env.MONGO_KEY
const databaseName = "use-mongo-test"

useMongo(username, clusterName, password, databaseName).then(async getCollect => {
  // more code here ...
  const users = getCollect("users")
  // next, this is basic mongodb

  // insert document
  users.insertOne({
    name: "Alex",
    age: 19,
    job: "police"
  })

  // find document
  const user = await users.findOne({
    name: "Alex"
  })

  // update document
  users.updateOne({ name: "Alex" }, {
    $set: {
      name: "John"
    },
    $inc: {
      age: 2 // up age on 2 (19 -> 21)
    }
  })

  // print found document
  console.log(user)  
})