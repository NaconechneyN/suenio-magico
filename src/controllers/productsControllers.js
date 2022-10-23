const productsControllers = {
    list: (req, res) => {
        res.render("productsList")
    },
    createForm: (req, res) => {
        res.render("productCreate")
    },
    create: (req, res) => {
        res.redirect("/products")
    },
    
}


module.exports = productsControllers; 