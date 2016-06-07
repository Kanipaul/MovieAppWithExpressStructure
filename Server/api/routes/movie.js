var express = require('express');
var router = express.Router();
var fs=require('fs');
var bodyParser = require('body-parser');
/* DB configuration */
var mongoose = require("mongoose");
var movieData = require("../../models/movies/movie");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Reading json for getting movie details*/
router.get('/readjson', function(req, res){
  console.log("Inside get movie method");
  movieData.find({},function(err,data){
    if(err){
      console.log("Error="+err);
    }
    res.send(JSON.stringify(data));
  });
});

/* Adding a new movie */
router.post('/addMovie', function(req, res, next){
console.log("Inside add movie method");
  var movie = new movieData({
    Title: req.body.Title,
    Year:req.body.Year,
    Released:req.body.Released,
    Director:req.body.Director,
    Actors:req.body.Actors,
    Plot:req.body.Plot,
    Awards:req.body.Awards,
    Poster:req.body.Poster,
    imdbRating:req.body.imdbRating
  });
    movie.save(function (err) {
      if (err) {
        return err;
      }
      else {
        console.log("New movie has been saved successfully !!!");
      }
    });
    res.redirect("/");
   });

/* Updating a movie */
router.post('/updateMovie', function(req, res){
  console.log("Inside update movie method");
    movieData.update({Title : {$eq: (req.body.Title)}},
      {$set: {
              Title: req.body.Title,
              Year:req.body.Year,
              Released: req.body.Released,
              Director: req.body.Director,
              Actors: req.body.Actors,
              Plot: req.body.Plot,
              Awards: req.body.Awards,
              Poster: req.body.Poster,
              imdbRating: req.body.imdbRating
            }
      },
     function(err, result){
       console.log("Movie has been updated successfully !!!");
       console.log(result);
    });
  res.redirect("/");
});

/* Deleting a movie */
router.post('/deleteMovie', function(req, res){
  console.log("Inside delete movie method");
    var Title = {
        Title: req.body.Title
    };
    console.log(Title);
    movieData.remove(Title, function(err){
      if(err){
           console.log("Error" + err);
       }
       else{
           console.log("Movie has been deleted successfully !!!");
       }
    });
  res.redirect("/");
});

module.exports = router;
