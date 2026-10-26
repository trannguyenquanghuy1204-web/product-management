module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("client/page/home/index");
    });

    app.get("/products", (req, res) => {
        res.send("Trang danh sách sản phẩm");
    });
}