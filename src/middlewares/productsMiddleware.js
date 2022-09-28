const productsMiddlewares = {
    checkCreateForm: (req, res, next) => {
        const {nombre, precio} = req.body

        if (!nombre || !precio) {
           return res.redirect("/products/create")
        }
        next()
    }
}


module.exports = productsMiddlewares;