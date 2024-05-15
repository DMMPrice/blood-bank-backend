const mongoose= require('mongoose');
const dotenv=require('dotenv').config();
const url=`mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.xa4ab9t.mongodb.net/bloodbank?retryWrites=true&w=majority&appName=Cluster0`;


// Async function to connect to the MongoDB database
const connectDatabase = async () => {
    // Using Mongoose to connect to the specified MongoDB URI
    await mongoose.connect(url, {}).then(() => {
        // Log a message when the connection is successful
        console.log('DB Connected');
    }).catch((err) => {
        // Log an error message if the connection fails
        console.log(err);
    });
}

// Exporting the connectDatabase function for use in other parts of the application
module.exports = connectDatabase;