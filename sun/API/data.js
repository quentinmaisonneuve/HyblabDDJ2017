/**
 * Created by alban on 28/01/17.
 * Get all datas for us.
 */
var db = require('./dbconnect');

var data = {
    // Get All Datas (with join of the 2 tables)
    getAllData:function(callback) {
        return db.query("SELECT * FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id", callback);
    },

    //TODO: CHANGE With DATE('2016-09-29 14:53:33') with DATE(NOW())
    getToday:function(callback) {
        return db.query("SELECT id FROM musique_auditeur_tbl WHERE DATE('2016-09-29 14:53:33') = DATE(date_heure_diffusion_reelle)", callback);
    },
    // Get occurency of each music genre during Winter
    getWinterGenre:function(callback)
    {
        return db.query("SELECT count(*), _genre4 FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE DAYOFYEAR(date_heure_diffusion_reelle) < 80 OR DAYOFYEAR(date_heure_diffusion_reelle) >= 355 GROUP BY _genre4;", callback)
    },
    // Get occurency of each music genre during Spring
    getSpringGenre:function(callback)
    {
        return db.query("SELECT count(*), _genre4 FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE DAYOFYEAR(date_heure_diffusion_reelle) >= 80 AND DAYOFYEAR(date_heure_diffusion_reelle) < 172 GROUP BY _genre4;", callback)
    },
    // Get occurency of each music genre during Summer
    getSummerGenre:function(callback)
    {
        return db.query("SELECT count(*), _genre4 FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE DAYOFYEAR(date_heure_diffusion_reelle) >= 172 AND DAYOFYEAR(date_heure_diffusion_reelle) < 264 GROUP BY _genre4;", callback)
    },
    // Get occurency of each music genre during Autumn
    getAutumnGenre:function(callback)
    {
        return db.query("SELECT count(*), _genre4 FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE DAYOFYEAR(date_heure_diffusion_reelle) >= 264 AND DAYOFYEAR(date_heure_diffusion_reelle) < 355 GROUP BY _genre4;", callback)
    },
    // Get occurency of each music genre between 2 dates (start, stop)
    getCreneau:function(start, stop, callback)
    {
        if (!valideDate(start) || !valideDate(stop))
            throw "Bad SQL Date Format";
        else
            return db.query("SELECT count(*), _genre4 FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE date_heure_diffusion_reelle >=  '"+ start+"' AND date_heure_diffusion_reelle <= '"+ stop +"' GROUP BY _genre4;", callback)
        //return db.query("SELECT count(*), _genre4 FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE DAYOFYEAR(date_heure_diffusion_reelle) < DAYOFYEAR(NOW()) AND DAYOFYEAR(date_heure_diffusion_reelle) >= (DAYOFYEAR(NOW())-1) GROUP BY _genre4;", callback)
    },

    // Get occurency of each music genre between a day & the season
    // Day use "DAYOFWEEK" : 1=sunday, 2=monday ...
    // Season : autumn, summer, spring or winter (/!\ lowcase)

    getCreneauSeasonDay:function(season, day, callback)
    {
        var intervalle = "";
        switch(season)
        {
            case "winter":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) < 80 OR DAYOFYEAR(date_heure_diffusion_reelle) >= 355";
                break;
            case "spring":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) >= 80 AND DAYOFYEAR(date_heure_diffusion_reelle) < 172";
                break;
            case "summer":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) >= 172 AND DAYOFYEAR(date_heure_diffusion_reelle) < 264";
                break;
            case "autumn":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) >= 264 AND DAYOFYEAR(date_heure_diffusion_reelle) < 355";
                break;
            default:
                throw "Bad season";
                break;
        }

        if ( (!/\d/.test(day)) &&  (day.length!=1) )
            throw "Bad day format";
        else if (intervalle == "")
            throw "Bad interval format";
        else if(season > 6 && !/\D{6}/.test(season))
            throw "Bad season format";
        else
            return db.query("SELECT count(*) AS value, _genre4 AS id FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND DAYOFWEEK(date_heure_diffusion_reelle)='"+day+"' GROUP BY _genre4;", callback)
        //return db.query("SELECT count(*), _genre4 FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE DAYOFYEAR(date_heure_diffusion_reelle) < DAYOFYEAR(NOW()) AND DAYOFYEAR(date_heure_diffusion_reelle) >= (DAYOFYEAR(NOW())-1) GROUP BY _genre4;", callback)
    },
    getCreneauSeasonWeek:function(season, week, callback)
    {
        var intervalle = "";
        switch(season)
        {
            case "winter":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) < 80 OR DAYOFYEAR(date_heure_diffusion_reelle) >= 355";
                break;
            case "spring":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) >= 80 AND DAYOFYEAR(date_heure_diffusion_reelle) < 172";
                break;
            case "summer":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) >= 172 AND DAYOFYEAR(date_heure_diffusion_reelle) < 264";
                break;
            case "autumn":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) >= 264 AND DAYOFYEAR(date_heure_diffusion_reelle) < 355";
                break;
            default:
                throw "Bad season";
                break;
        }

        if ( (!/\d/.test(week)) &&  (week.length!=1) )
            throw "Bad week format";
        else if (intervalle == "")
            throw "Bad interval format";
        else if(season > 6 && !/\D{6}/.test(season))
            throw "Bad season format";
        else
        if (week == 0) // Week
            return db.query("SELECT count(*) AS value, _genre4 AS id FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND (DAYOFWEEK(date_heure_diffusion_reelle)>='1' AND DAYOFWEEK(date_heure_diffusion_reelle)<='5') GROUP BY _genre4;", callback)
        else if (week == 1) // Week End
            return db.query("SELECT count(*) AS value, _genre4 AS id FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND (DAYOFWEEK(date_heure_diffusion_reelle)>='0' OR DAYOFWEEK(date_heure_diffusion_reelle)<='6') GROUP BY _genre4;", callback)
        //return db.query("SELECT count(*), _genre4 FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE DAYOFYEAR(date_heure_diffusion_reelle) < DAYOFYEAR(NOW()) AND DAYOFYEAR(date_heure_diffusion_reelle) >= (DAYOFYEAR(NOW())-1) GROUP BY _genre4;", callback)
    },
    getCreneauSeasonWeekHour:function(season, week, start, end, callback)
    {
        var intervalle = "";
        switch(season)
        {
            case "winter":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) < 80 OR DAYOFYEAR(date_heure_diffusion_reelle) >= 355";
                break;
            case "spring":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) >= 80 AND DAYOFYEAR(date_heure_diffusion_reelle) < 172";
                break;
            case "summer":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) >= 172 AND DAYOFYEAR(date_heure_diffusion_reelle) < 264";
                break;
            case "autumn":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) >= 264 AND DAYOFYEAR(date_heure_diffusion_reelle) < 355";
                break;
            default:
                throw "Bad season";
                break;
        }

        if ( (!/\d/.test(week)) &&  (week.length!=1) )
            throw "Bad week format";
        else if (intervalle == "")
            throw "Bad interval format";
        else if(season > 6 && !/\D{6}/.test(season))
            throw "Bad season format";
        else
        if (week == 0) // Week
            return db.query("SELECT count(*) AS value, _genre4 AS id FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND WEEKDAY(date_heure_diffusion_reelle)<='4' AND HOUR(date_heure_diffusion_reelle)>='"+start+"' AND HOUR(date_heure_diffusion_reelle)<='"+end+"'  GROUP BY _genre4;", callback)
        else if (week == 1) // Week End
            return db.query("SELECT count(*) AS value, _genre4 AS id FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND WEEKDAY(date_heure_diffusion_reelle)>='5' AND HOUR(date_heure_diffusion_reelle)>='"+start+"' AND HOUR(date_heure_diffusion_reelle)<='"+end+"' GROUP BY _genre4;", callback)
        //return db.query("SELECT count(*), _genre4 FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE DAYOFYEAR(date_heure_diffusion_reelle) < DAYOFYEAR(NOW()) AND DAYOFYEAR(date_heure_diffusion_reelle) >= (DAYOFYEAR(NOW())-1) GROUP BY _genre4;", callback)
    },

getMoodCreneau:function(mood,start, stop, callback)
    {
        if (!valideDate(start) || !valideDate(stop))
            throw "Bad SQL Date Format";
        else
        switch(mood)
        {
            case "Nostalgique":
                
                return db.query("SELECT count(*)as value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE date_heure_diffusion_reelle >=  '"+ start+"' AND date_heure_diffusion_reelle <= '"+ stop +"' AND (_mood1='Grisante' OR _mood1='Mélancolique' OR _mood1='Nostalgique' OR _mood1='Tourmentée');", callback);
                break;
            case "Cool" :
                return db.query("SELECT count(*)as value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE date_heure_diffusion_reelle >=  '"+ start+"' AND date_heure_diffusion_reelle <= '"+ stop +"' AND (_mood1='Brûlante' OR _mood1='Cool' OR _mood1='Enflammée' OR _mood1='Insouciante' OR _mood1='Paisible');", callback);
                break;
            case "Stimulante":
                return db.query("SELECT count(*)as value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE date_heure_diffusion_reelle >=  '"+ start+"' AND date_heure_diffusion_reelle <= '"+ stop +"' AND (_mood1='Stimulante' OR _mood1='Vigoureuse' OR _mood1='Exaltante' OR _mood1='Sensuelle' OR _mood1='Enjouée' OR _mood1='Agitée' );", callback);
                break;
            case "Agressive":   
                return db.query("SELECT count(*)as value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE date_heure_diffusion_reelle >=  '"+ start+"' AND date_heure_diffusion_reelle <= '"+ stop +"' AND (_mood1='Chahuteuse' OR _mood1='Provocante' OR _mood1='Agressive' OR _mood1='Ténébreuse');", callback);
                break;
            case "Sentimentale":
                return db.query("SELECT count(*)as value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE date_heure_diffusion_reelle >=  '"+ start+"' AND date_heure_diffusion_reelle <= '"+ stop +"' AND (_mood1='Sentimentale' OR _mood1='Romantique' OR _mood1='Réaliste' OR _mood1='Sophistiquée'  OR _mood1='Sérieuse' OR _mood1='Tendre');", callback);
                break;
            default:
                throw "Bad mood";
                break;


        }
},
getMoodSeasonWeekHour:function(mood,season, week, start, end, callback)
    {
        var intervalle = "";
        switch(season)
        {
            case "winter":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) < 80 OR DAYOFYEAR(date_heure_diffusion_reelle) >= 355";
                break;
            case "spring":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) >= 80 AND DAYOFYEAR(date_heure_diffusion_reelle) < 172";
                break;
            case "summer":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) >= 172 AND DAYOFYEAR(date_heure_diffusion_reelle) < 264";
                break;
            case "autumn":
                intervalle = "DAYOFYEAR(date_heure_diffusion_reelle) >= 264 AND DAYOFYEAR(date_heure_diffusion_reelle) < 355";
                break;
            default:
                throw "Bad season";
                break;
        }

        if ( (!/\d/.test(week)) &&  (week.length!=1) )
            throw "Bad week format";
        else if (intervalle == "")
            throw "Bad interval format";
        else if(season > 6 && !/\D{6}/.test(season))
            throw "Bad season format";
        else
        switch(mood)
        {
            case "Nostalgique":
                if (week == 0) // Week
                    return db.query("SELECT count(*) AS value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND WEEKDAY(date_heure_diffusion_reelle)<='4' AND HOUR(date_heure_diffusion_reelle)>='"+start+"' AND HOUR(date_heure_diffusion_reelle)<='"+end+"'AND (_mood1='Grisante' OR _mood1='Mélancolique' OR _mood1='Nostalgique' OR _mood1='Tourmentée');", callback);
                else if (week == 1) // Week End
                    return db.query("SELECT count(*) AS value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND WEEKDAY(date_heure_diffusion_reelle)>='5' AND HOUR(date_heure_diffusion_reelle)>='"+start+"' AND HOUR(date_heure_diffusion_reelle)<='"+end+"'AND (_mood1='Grisante' OR _mood1='Mélancolique' OR _mood1='Nostalgique' OR _mood1='Tourmentée');", callback);
                break;
            case "Cool" :
                if (week == 0) // Week
                        return db.query("SELECT count(*) AS value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND WEEKDAY(date_heure_diffusion_reelle)<='4' AND HOUR(date_heure_diffusion_reelle)>='"+start+"' AND HOUR(date_heure_diffusion_reelle)<='"+end+"'AND (_mood1='Brûlante' OR _mood1='Cool' OR _mood1='Enflammée' OR _mood1='Insouciante' OR _mood1='Paisible');", callback);
                else if (week == 1) // Week End
                        return db.query("SELECT count(*) AS value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND WEEKDAY(date_heure_diffusion_reelle)>='5' AND HOUR(date_heure_diffusion_reelle)>='"+start+"' AND HOUR(date_heure_diffusion_reelle)<='"+end+"'AND (_mood1='Brûlante' OR _mood1='Cool' OR _mood1='Enflammée' OR _mood1='Insouciante' OR _mood1='Paisible');", callback);
                break;
            case "Stimulante":
                if (week == 0) // Week
                     return db.query("SELECT count(*) AS value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND WEEKDAY(date_heure_diffusion_reelle)<='4' AND HOUR(date_heure_diffusion_reelle)>='"+start+"' AND HOUR(date_heure_diffusion_reelle)<='"+end+"'AND (_mood1='Stimulante' OR _mood1='Vigoureuse' OR _mood1='Exaltante' OR _mood1='Sensuelle' OR _mood1='Enjouée' OR _mood1='Agitée' );", callback);
                else if (week == 1) // Week End
                     return db.query("SELECT count(*) AS value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND WEEKDAY(date_heure_diffusion_reelle)>='5' AND HOUR(date_heure_diffusion_reelle)>='"+start+"' AND HOUR(date_heure_diffusion_reelle)<='"+end+"'AND (_mood1='Stimulante' OR _mood1='Vigoureuse' OR _mood1='Exaltante' OR _mood1='Sensuelle' OR _mood1='Enjouée' OR _mood1='Agitée');", callback);
                break;
            case "Agressive":   
                if (week == 0) // Week
                    return db.query("SELECT count(*) AS value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND WEEKDAY(date_heure_diffusion_reelle)<='4' AND HOUR(date_heure_diffusion_reelle)>='"+start+"' AND HOUR(date_heure_diffusion_reelle)<='"+end+"'AND (_mood1='Chahuteuse' OR _mood1='Provocante' OR _mood1='Agressive' OR _mood1='Ténébreuse');", callback);
                else if (week == 1) // Week End
                    return db.query("SELECT count(*) AS value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND WEEKDAY(date_heure_diffusion_reelle)>='5' AND HOUR(date_heure_diffusion_reelle)>='"+start+"' AND HOUR(date_heure_diffusion_reelle)<='"+end+"'AND (_mood1='Chahuteuse' OR _mood1='Provocante' OR _mood1='Agressive' OR _mood1='Ténébreuse');", callback);
                break;
            case "Nostalgique":
                if (week == 0) // Week
                    return db.query("SELECT count(*) AS value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND WEEKDAY(date_heure_diffusion_reelle)<='4' AND HOUR(date_heure_diffusion_reelle)>='"+start+"' AND HOUR(date_heure_diffusion_reelle)<='"+end+"' AND (_mood1='Sentimentale' OR _mood1='Romantique' OR _mood1='Réaliste' OR _mood1='Sophistiquée'  OR _mood1='Sérieuse' OR _mood1='Tendre');", callback);
                else if (week == 1) // Week End
                    return db.query("SELECT count(*) AS value FROM winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id WHERE "+intervalle+" AND WEEKDAY(date_heure_diffusion_reelle)>='5' AND HOUR(date_heure_diffusion_reelle)>='"+start+"' AND HOUR(date_heure_diffusion_reelle)<='"+end+"' AND (_mood1='Sentimentale' OR _mood1='Romantique' OR _mood1='Réaliste' OR _mood1='Sophistiquée'  OR _mood1='Sérieuse' OR _mood1='Tendre');", callback);
                break;
            default:
                throw "Bad mood";
                break;


        }
        
    },
     //TODO: CHANGE With DATE('2016-09-29 14:53:33') with DATE(NOW()) for the 12 function that follow
     getThisWeekRock:function(callback) {
        var rand = Math.floor((Math.random() * 12) + 1);
                
                return db.query("select count(*) as value from winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id where dayofyear(DATE('2016-09-29 14:53:33'))-7 <= dayofyear(DATE(date_heure_diffusion_reelle)) AND dayofyear(DATE(date_heure_diffusion_reelle))<= dayofyear(DATE('2016-09-29 14:53:33')) AND year('2016-09-29 14:53:33')=year(date_heure_diffusion_reelle) AND  _genre4='Rock';",callback)
                
            
    },
    getThisWeekAlternativeEtPunk:function(callback) {
        var rand = Math.floor((Math.random() * 12) + 1);
              
                return db.query("select count(*) as value from winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id where dayofyear(DATE('2016-09-29 14:53:33'))-7 <= dayofyear(DATE(date_heure_diffusion_reelle)) AND dayofyear(DATE(date_heure_diffusion_reelle))<= dayofyear(DATE('2016-09-29 14:53:33')) AND year('2016-09-29 14:53:33')=year(date_heure_diffusion_reelle) AND  _genre4='Alternative et punk';",callback)
                  
    },
    getThisWeekUrban:function(callback) {
        var rand = Math.floor((Math.random() * 12) + 1);
   
                return db.query("select count(*) as value from winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id where dayofyear(DATE('2016-09-29 14:53:33'))-7 <= dayofyear(DATE(date_heure_diffusion_reelle)) AND dayofyear(DATE(date_heure_diffusion_reelle))<= dayofyear(DATE('2016-09-29 14:53:33')) AND year('2016-09-29 14:53:33')=year(date_heure_diffusion_reelle) AND  _genre4='Electronica';",callback)
                
            
    },
    getThisWeekElectronica:function(callback) {
        var rand = Math.floor((Math.random() * 12) + 1);

                return db.query("select count(*) as value from winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id where dayofyear(DATE('2016-09-29 14:53:33'))-7 <= dayofyear(DATE(date_heure_diffusion_reelle)) AND dayofyear(DATE(date_heure_diffusion_reelle))<= dayofyear(DATE('2016-09-29 14:53:33')) AND year('2016-09-29 14:53:33')=year(date_heure_diffusion_reelle) AND  _genre4='Urban';",callback)

    },
    getThisWeekClassique:function(callback) {
        var rand = Math.floor((Math.random() * 12) + 1);

                return db.query("select count(*) as value from winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id where dayofyear(DATE('2016-09-29 14:53:33'))-7 <= dayofyear(DATE(date_heure_diffusion_reelle)) AND dayofyear(DATE(date_heure_diffusion_reelle))<= dayofyear(DATE('2016-09-29 14:53:33')) AND year('2016-09-29 14:53:33')=year(date_heure_diffusion_reelle) AND  _genre4='Classique';",callback)

    },
    getThisWeekJazz:function(callback) {
        var rand = Math.floor((Math.random() * 12) + 1);
 
                return db.query("select count(*) as value from winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id where dayofyear(DATE('2016-09-29 14:53:33'))-7 <= dayofyear(DATE(date_heure_diffusion_reelle)) AND dayofyear(DATE(date_heure_diffusion_reelle))<= dayofyear(DATE('2016-09-29 14:53:33')) AND year('2016-09-29 14:53:33')=year(date_heure_diffusion_reelle) AND  _genre4='Jazz';",callback)

    },
    getThisWeekPop:function(callback) {
        var rand = Math.floor((Math.random() * 12) + 1);

                
                return db.query("select count(*) as value from winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id where dayofyear(DATE('2016-09-29 14:53:33'))-7 <= dayofyear(DATE(date_heure_diffusion_reelle)) AND dayofyear(DATE(date_heure_diffusion_reelle))<= dayofyear(DATE('2016-09-29 14:53:33')) AND year('2016-09-29 14:53:33')=year(date_heure_diffusion_reelle) AND  _genre4='Pop';",callback)
  
    },
    getThisWeekSentimentale:function(callback) {
        var rand = Math.floor((Math.random() * 12) + 1);

                
                return db.query("select count(*) as value from winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id where dayofyear(DATE('2016-09-29 14:53:33'))-7 <= dayofyear(DATE(date_heure_diffusion_reelle)) AND dayofyear(DATE(date_heure_diffusion_reelle))<= dayofyear(DATE('2016-09-29 14:53:33')) AND year('2016-09-29 14:53:33')=year(date_heure_diffusion_reelle) AND (_mood1='Sentimentale' OR _mood1='Romantique' OR _mood1='Réaliste' OR _mood1='Sophistiquée'  OR _mood1='Sérieuse' OR _mood1='Tendre');",callback)
  
    },
    getThisWeekAgressive:function(callback) {
        var rand = Math.floor((Math.random() * 12) + 1);

                
                return db.query("select count(*) as value from winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id where dayofyear(DATE('2016-09-29 14:53:33'))-7 <= dayofyear(DATE(date_heure_diffusion_reelle)) AND dayofyear(DATE(date_heure_diffusion_reelle))<= dayofyear(DATE('2016-09-29 14:53:33')) AND year('2016-09-29 14:53:33')=year(date_heure_diffusion_reelle) AND  (_mood1='Chahuteuse' OR _mood1='Provocante' OR _mood1='Agressive' OR _mood1='Ténébreuse');",callback)
  
    },
    getThisWeekStimulante:function(callback) {
        var rand = Math.floor((Math.random() * 12) + 1);

                
                return db.query("select count(*) as value from winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id where dayofyear(DATE('2016-09-29 14:53:33'))-7 <= dayofyear(DATE(date_heure_diffusion_reelle)) AND dayofyear(DATE(date_heure_diffusion_reelle))<= dayofyear(DATE('2016-09-29 14:53:33')) AND year('2016-09-29 14:53:33')=year(date_heure_diffusion_reelle) AND  (_mood1='Stimulante' OR _mood1='Vigoureuse' OR _mood1='Exaltante' OR _mood1='Sensuelle' OR _mood1='Enjouée' OR _mood1='Agitée' );",callback)
  
    },
    getThisWeekCool:function(callback) {
        var rand = Math.floor((Math.random() * 12) + 1);

                
                return db.query("select count(*) as value from winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id where dayofyear(DATE('2016-09-29 14:53:33'))-7 <= dayofyear(DATE(date_heure_diffusion_reelle)) AND dayofyear(DATE(date_heure_diffusion_reelle))<= dayofyear(DATE('2016-09-29 14:53:33')) AND year('2016-09-29 14:53:33')=year(date_heure_diffusion_reelle) AND  (_mood1='Brûlante' OR _mood1='Cool' OR _mood1='Enflammée' OR _mood1='Insouciante' OR _mood1='Paisible');",callback)
  
    },
    getThisWeekNostalgique:function(callback) {
        var rand = Math.floor((Math.random() * 12) + 1);

                
                return db.query("select count(*) as value from winmedia_media W LEFT JOIN musique_auditeur_tbl M ON M.id_musique = W._jazler_id where dayofyear(DATE('2016-09-29 14:53:33'))-7 <= dayofyear(DATE(date_heure_diffusion_reelle)) AND dayofyear(DATE(date_heure_diffusion_reelle))<= dayofyear(DATE('2016-09-29 14:53:33')) AND year('2016-09-29 14:53:33')=year(date_heure_diffusion_reelle) AND  (_mood1='Grisante' OR _mood1='Mélancolique' OR _mood1='Nostalgique' OR _mood1='Tourmentée');",callback)
  
    },

};

// Function verify if a date format sql is correct
function valideDate(date)
{
    myRegex=/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
    return (myRegex.test(date) && date.length==19);
}

module.exports=data;