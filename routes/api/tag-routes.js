const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tags = await Tag.findAll({
      include:[{ model : Product}]
    });
    res.json(200).json(tags);
  }catch(err){
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const ids = req.params.id;
    const tag_ids = await Tag.findByPk(ids,{
      include: [{model: Product}]
    });
    res.status(200).json(tag_ids);
  }catch(err){
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const new_tag = await Tag.create(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(new_tag);
  }catch(err){
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{

  }catch(err){
    res.status(400).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{

  }catch(err){
    res.status(400).json(err)
  }
});

module.exports = router;
