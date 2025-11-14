const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB connected error: ",err));

const foodRoutes = require("./routes/foodRoutes");


app.use("/api/foods", foodRoutes);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
