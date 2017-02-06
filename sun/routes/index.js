var express = require('express');
var router = express.Router();
var data = require('../API/data.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SUN Radio présente sa Dataviz' });
});

/* GETTERS FOR RESTFUL API DB */


router.get('/creneau/:start/:stop', function(req, res, next) {
    data.getCreneau(req.params.start, req.params.stop, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});


// season : winter, spring, summer, autumn
// week : 0 week - 1 weekend
// start: start of  (0-23)
// end: end of intervalle hour : (0-23)
router.get('/creneau/:season/:week/:start/:end', function(req, res, next) {
    data.getCreneauSeasonWeekHour(req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/creneauM/:season/:week/:start/:end', function(req, res, next) {

    data.getMoodSeasonWeekHour("Nostalgique", req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        if(err){res.json(err);}
        else{
            res.json(rows);
        }
    });
});

router.get('/today', function(req, res, next) {
    data.getToday(function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});


router.get('/creneauMood/:season/:week/:start/:end', function(req, res, next) {
    var json = [];

    data.getMoodSeasonWeekHour("Cool",req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        if(err){res.json(err);}
        else{
            json.push({id:"Cool", value:rows[0].value});
        }
    });
    data.getMoodSeasonWeekHour("Nostalgique",req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        if(err){res.json(err);}
        else{
            json.push({id:"Nostalgique", value:rows[0].value});
        }
    });
    data.getMoodSeasonWeekHour("Stimulante",req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        json.push({id:"Stimulante", value:rows[0].value});
    });
    data.getMoodSeasonWeekHour("Agressive",req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        json.push({id: "Agressive", value: rows[0].value});
    });
    data.getMoodSeasonWeekHour("Sentimentale",req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        json.push({id:"Sentimentale", value:rows[0].value});
        res.json(json);
    });
});
router.get('/ThisWeekRock', function(req, res, next) {
    data.getThisWeekRock( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});
router.get('/ThisWeekAlternativeEtPunk', function(req, res, next) {
    data.getThisWeekAlternativeEtPunk( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});
router.get('/ThisWeekUrban', function(req, res, next) {
    data.getThisWeekUrban( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/ThisWeekElectronica', function(req, res, next) {
    data.getThisWeekElectronica( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});


router.get('/ThisWeekJazz', function(req, res, next) {
    data.getThisWeekJazz( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/ThisWeekPop', function(req, res, next) {
    data.getThisWeekPop( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/ThisWeekNostalgique', function(req, res, next) {
    data.getThisWeekNostalgique( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/ThisWeekCool', function(req, res, next) {
    data.getThisWeekCool( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});
router.get('/ThisWeekStimulante', function(req, res, next) {
    data.getThisWeekStimulante( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});
router.get('/ThisWeekAgressive', function(req, res, next) {
    data.getThisWeekAgressive( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});
router.get('/ThisWeekSentimentale', function(req, res, next) {
    data.getThisWeekSentimentale( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/GenreCreneau4H/:numberOfCreneau', function(req, res, next) {
    data.getGenreCreneau4H(req.params.numberOfCreneau, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/getLast24', function(req, res, next)
{
    var truc;
    data.getGenreCreneau4H(req.params.numberOfCreneau, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});


module.exports = router;