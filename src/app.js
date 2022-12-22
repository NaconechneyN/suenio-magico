const express = require("express");
const app = express();
const path = require("path"); 

// Enable get elements from body -> POST
app.use(express.urlencoded({ extended: true }))

//motor de vista
app.set('view engine', 'ejs');
app.set('views',[
    path.join(__dirname, "./views"),//./src/views
    path.join(__dirname, "./views/products"),
    path.join(__dirname, "./views/users")
]);

//rutas
const mainRoutes = require("./routes/mainRoutes")  //
const productsRoutes = require("./routes/productsRoutes")

app.use("/", mainRoutes)
app.use("/products", productsRoutes)

//iniciamos puerto
app.listen(3000, () => {
    console.log("Servidor up!")
})


