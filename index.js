const express = require("express");
const route = require("./routes/client/index_route");

const app = express();
const port = 3000;

app.set("view", "./view");
app.set("view engine", "pug");

// app.get("/", (req, res) => {
//     res.render("client/page/home/index");
// });

// app.get("/products", (req, res) => {
//     res.send("Trang danh sách sản phẩm");
// });
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

