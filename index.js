const route = require("./routes/index")
const express = require("express");
const cookieParser = require("cookie-parser");
const {connectDB} = require("./dbConnection");
const morgan = require("morgan");
const app = express();
app.use(cookieParser())
app.use(morgan("dev"));
app.use(express.json())
route(app);
const port=9000


//db connection
connectDB();

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})