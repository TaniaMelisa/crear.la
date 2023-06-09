//* Require */
const express = require('express');
const router = express.Router();

//* Controllers require */
const categoriesController = require('../controllers/categoriesController');

//* Middlewares require */
const uploadFile = require("../middlewares/categoryMulterMiddleware")
const validateCategoryCreateForm = require ("../middlewares/validateCategoryCreateForm")
const validateCategoryEditForm = require ("../middlewares/validateCategoryEditForm")

//* Muestra todas las categorías */
router.get('/all', categoriesController.index);

// * Muestra el detalle de una categoría *//
router.get('/detail/:id/', categoriesController.detail);

// Crea una categoría //
router.get('/categoryCreate', categoriesController.categoryCreate); //muestra el form que crea categorías//
router.post('/detail', uploadFile.single("foto"), validateCategoryCreateForm, categoriesController.store); //guarda lo que cargan en el form//

// Edita una categoria //
router.get('/edit/:id', categoriesController.edit)
router.put('/edit/:id', uploadFile.single("foto"), validateCategoryEditForm, categoriesController.toUpdate)

// Borrar una categoria //
router.post('/delete/:id', categoriesController.delete)

module.exports = router;