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
    }
};

// Function verify if a date format sql is correct
function valideDate(date)
{
    myRegex=/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
    return (myRegex.test(date) && date.length==19);
}

module.exports=data;