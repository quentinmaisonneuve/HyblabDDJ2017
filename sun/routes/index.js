var express = require('express');
var router = express.Router();
var data = require('../API/data.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SUN Radio présente sa Dataviz' });
});

/* GETTERS FOR RESTFUL API DB */
router.get('/allData', function(req, res, next){
  data.getAllData(function(err,rows){
    if(err){res.json(err);}
    else{res.json(rows);}
  });
});

router.get('/genreSeason/:name', function(req, res, next){
    switch (req.params.name)
    {
        case "autumn":
            data.getAutumnGenre(function(err,rows){
                if(err){res.json(err);}
                else{res.json(rows);}
            });
            break;
        case "summer":
            data.getSummerGenre(function(err,rows){
                if(err){res.json(err);}
                else{res.json(rows);}
            });
            break;
        case "spring":
            data.getSpringGenre(function(err,rows){
                if(err){res.json(err);}
                else{res.json(rows);}
            });
            break;
        case "winter":
            data.getWinterGenre(function(err,rows){
                if(err){res.json(err);}
                else{res.json(rows);}
            });
            break;
        default:
            var resp="";
            data.getAutumnGenre(function(err, rows)
            {
                if(err){res.json(err);}
                else{resp = rows;}
            });
            console.log("resp="+resp);
            data.getWinterGenre(function(err, rows)
            {
                if(err){res.json(err);}
                else{resp.concat(resp, rows);}
            });
            console.log("resp="+resp);
            data.getSpringGenre(function(err, rows)
            {
                if(err){res.json(err);}
                else{resp.concat(resp, rows);}
            });
            console.log("resp="+resp);
            data.getSummerGenre(function(err, rows)
            {
                if(err){res.json(err);}
                else{resp.concat(resp, rows);}
            });
            console.log("resp="+resp);
            res.json(resp);
            break;
    }
});

router.get('/creneau/:start/:stop', function(req, res, next) {
    data.getCreneau(req.params.start, req.params.stop, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/creneauSeason/:season/:day', function(req, res, next) {
    data.getCreneauSeasonDay(req.params.season, req.params.day, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

// week : 0 semaine / 1 week end
router.get('/creneauSeasonWeek/:season/:week', function(req, res, next) {
    data.getCreneauSeasonWeek(req.params.season, req.params.week, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/creneau/:season/:week/:start/:end', function(req, res, next) {
    data.getCreneauSeasonWeekHour(req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

module.exports = router;