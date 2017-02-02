var number = 0;
$.getJSON('/today/', function(data) {
    number = data.length;
    if (number >= 2)
        document.getElementById("numberOfMusicToday").innerHTML = number + " personnes";
    else if (number < 2)
        document.getElementById("numberOfMusicToday").innerHTML = number + " personne";
    else
        document.getElementById("numberOfMusicToday").innerHTML = "? personne";
});