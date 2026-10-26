const homeRoute = require("./home_route");
const productRoute = require("./product_route");

module.exports = (app) => {
    app.use("/", homeRoute);
    app.use("/products", productRoute);
};
