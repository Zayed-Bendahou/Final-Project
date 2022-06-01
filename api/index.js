const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");

app.use(cors({
    origin : "*"
}));

mongoose.connect('mongodb+srv://zaryuss:dxeq1apo@cluster0.legao.mongodb.net/?retryWrites=true&w=majority')

const jobSchema = {
    title: String,
    description: String,
    level: String,
}

const categorySchema = {
    title: String,
    jobs: [jobSchema],
}

const catergory = mongoose.model('category', categorySchema);

app.use(bodyParser.urlencoded({ extended : true }))

app.route('/api/offers/')
.get(function(req, res) {
    catergory.find({}, function(err, foundCategories) {
        if (err) {
            res.send(err);
        } else {
            res.send(foundCategories);
        }
    })
})

app.listen(PORT, function() {
    console.log(`Server Running in Port : ${PORT}`);
})