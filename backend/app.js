const express = require("express");
const cors = require('cors');
const app = express();
const port = 5000;
const appRoute = require("./routes/web");

app.use(cors());

app.use(express.json());

app.use(
    express.urlencoded({
    extended: true,
    })
);

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.use("/posts", appRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});