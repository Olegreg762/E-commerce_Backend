const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',  async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const products = await Category.findAll({
    include: [Product]
  });
  res.json(products)
  } catch (err){
    res.status(400).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const product = await Category.findOne({
      where: {id: req.params.id
      }
    });
  } catch (err){
    res.status(400).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    
  } catch (err){
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{

  } catch (err){
    res.status(400).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{

  } catch (err){
    res.status(400).json(err)
  }
});

module.exports = router;
