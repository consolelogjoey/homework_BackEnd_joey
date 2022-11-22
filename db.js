const admin = require("firebase-admin")
const config = require("./config")
const serviceAccount = require("./backend-intern-gen-5-firebase-adminsdk-gb4sp-4b7c5b662d.json")
const firebaseConfig = config.firebaseConfig

const database = admin.initializeApp({
    firebaseConfig,
    credential: admin.credential.cert(serviceAccount)
})

module.exports = {
    database
}