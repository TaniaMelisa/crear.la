const fs = require('fs');
const path = require('path');  

const productsFilePath = path.join(__dirname, '../data/product.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {

    //* Enseña la cantidad de productos disponibles */

    index: (req, res) => {
        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/product.ejs', {products})
    }, 
    desarrolloApp: (req, res) => {
        res.render ('./products/desarrollo-app.ejs')
    },

    desarrolloSoftware: (req, res) => {
        res.render('./products/desarrollo-software.ejs')
    },

    desarrolloWeb: (req, res) => {
        res.render('./products/desarrollo-web.ejs')
    },

    disenoWeb: (req, res) => {
        res.render('./products/diseno-web.ejs')
    },

    ecommerce: (req, res) => {
        res.render('./products/ecommerce.ejs')
    },
    detail: (req, res) => {
        const id = req.params.id;
        const productos = products.find(product => product.id == id);
         res.render('./products/product-noborrar.ejs', {products})
     },
    create: (req, res)=>{
        res.render("./products/portafolio.ejs")
    },
    store: (req, res)=>{
        // guardamos el producto//
        let newProduct = {
            id: products[products.length - 1].id + 1,
			nombre: req.body.nombre,
			descripcion: req.body.description,
			categoria: req.body.categoria,
			imagen: req.file.filename,
			precio: req.body.precio
		}
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, "  "));
		res.redirect("/products")
    },
    edit: (req, res) => {
        const id = req.params.id;
        const productos = products.find(product => product.id == id);
         res.render('./products/productEditForm.ejs', {products})
     },
     update: (req, res)=> {
        //editamos el producto/heroe que lelgo por params.id
        const id = req.params.id;
        const productToEdit = products.find(product => product.id == id);

        const editProduct = {
            id: id,
            nombre: req.body.nombre,
            descripcion: req.body.description,
            categoria: req.body.categoria,
			imagen: req.file ? req.file.filename : productToEdit.imagen,
			precio: req.body.precio
        }
        //ya modificamos el array
        products.forEach((product, index) => {
			if(product.id == id) {
				products[index] = editProduct;
			}
		});
        //** lo gaurdamos */
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		
		res.redirect("/products")
    },
    destroy: (req, res)=>{
        //eliminamos el prodcuto que llego por params.id
        const id = req.params.id;
        const finalProducts = products.filter(product => product.id != id); // que me traiga todos menos al que pusimos en id
          //** lo gaurdamos */
        fs.writeFileSync(productsFilePath, JSON.stringify(finalproducts, null, " "));
		
		res.redirect("/products")
    }
}

module.exports = productsController ;
