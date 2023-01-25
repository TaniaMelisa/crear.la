const fs = require('fs');
const path = require('path');  
let db = require('../database/models');
const { validationResult } = require('express-validator');
const sequelize = db.sequelize;

         /*Defino variable para base Json de Categorías***
const categoryFilePath = path.join(__dirname, '../data/categories.json');
let categories = JSON.parse(fs.readFileSync(categoryFilePath, 'utf-8'));
const serviciosFilePath = path.join(__dirname, '../data/servicios.json');
let servicios = JSON.parse(fs.readFileSync(serviciosFilePath, 'utf-8'));*/


// Defino variable para base de datos
let categorias = db.Categoria.findAll()



const categoriesController = {
    //* Enseña la cantidad de categorías disponibles */
    index: (req, res) => {
        categorias
            .then(function(categorias){
                return  res.render('./servicios/categories', {categorias:categorias})
            })

       /*categories = JSON.parse(fs.readFileSync(categoryFilePath, 'utf-8'));
        res.render('./servicios/categories', {categories})*/
    },


    detail: (req, res) => {
       let categoryId= req.params.id
                        db.Categoria.findAll()
            .then(function(categorias){
                res.render('./servicios/categorySolo', {categoryId, categorias})
            })
        
    },


    //* Formulario para crear una categoría */
    categoryCreate: (req, res) => {
        res.render('./servicios/categoryCreate', {categorias:categorias})
    },


    //* Guarda la categoría */    
    store: (req, res)=>{
            db.Categoria.create({
                nombre: req.body.nombre,
                descripcion: req.body.description,
                imagen: req.body.foto
            })

        res.redirect('/categories/all')


        /*let newCategory = {
            id: categories[categories.length - 1].id + 1,
			nombre: req.body.nombre,
			descripcion: req.body.description,
			imagen: req.file.filename,
		}
		categories.push(newCategory);
		fs.writeFileSync(categoryFilePath, JSON.stringify(categorias, null, "  "));
		res.redirect("/categories/all")*/
    }
}

module.exports = categoriesController;