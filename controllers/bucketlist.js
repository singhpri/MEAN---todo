//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const bucketlist = require('../models/list.js');

//GET HTTP method to /bucketlist
router.get('/',(req,res) => {
  bucketlist.find({},'title category description')
  .sort({title:1})
    .then(bucketlist => res.status(200).send(bucketlist))
    .catch(error => res.status(404).send(error));
});

//POST HTTP method to /bucketlist

router.post('/', (req,res,next) => {
  const _bucketlist = new bucketlist();
  _bucketlist.title = req.body.title;
  _bucketlist.description = req.body.description;
  _bucketlist.category = req.body.category;

  _bucketlist.save()
  .then (bucketlist => {
    console.log("post service called...");

    res.status(201).send(bucketlist);
  });
});


//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {
  bucketlist.findByIdAndRemove(req.params.id, (err,bucketlist) => {
    if(err) res.status(400).send(err);
    res.status(200).send(bucketlist);

  });
});

module.exports = router;
