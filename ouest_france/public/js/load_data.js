'use strict';

var loaded = (function () {
    var count = 1;

    return function () {
        return count++;
    }
})();

var to_load = [
    {
        path: "data/csv",
        name: "MOD_D30_Mode_Marche",
        ext: "csv",
        type: "matrix",
        area: "d30",
        more: ["mode", "marche"]
    },
    {
        path: "data/csv",
        name: "PER_D30_Age",
        ext: "csv",
        type: "per",
        area: "d30",
        more: ["age"]
    }
];

var index = {};
var data = {};

// Load index file
fetch("data/index.json")
    .then(function (response) {
        if (response.ok)
            return response.json();
        else
            return { err: "JSON file not found" };
    })
    .catch(function (error) {
        return { err: "Invalid JSON" };
    })
    .then(function (json) {
        index = json;
        if (loaded() === 1) {
        }
    });

// Load csv data files
to_load.map(function (file) {
    if (!(file.area in data)) {
        data[file.area] = {};
    }

    var current = data[file.area];

    if (!(file.type in current)) {
        current[file.type] = {};
    }

    current = current[file.type];

    file.more.map(function (m) {
        if (!(m in current)) {
            current[m] = {};
        }

        current = current[m];
    });

    load(file.path + '/' + file.name + '.' + file.ext, file.type, file.area, file.more);
});

// Functions
function load(filename, type, area, more) {
    d3.text(filename, function (file) {
        var rows = [];

        d3.dsvFormat(";").parseRows(file, function (row) {
            rows.push(row);
        });
        
        var current = data[area][type];

        more.map(function (m) {
            current = current[m];
        });

        for (var i = 1; i < rows.length; ++i) {
            current[rows[i][0]] = {};
            for (var j = 1; j < rows[i].length; ++j) {
                current[rows[i][0]][rows[0][j]] = +rows[i][j];
            }
        }
    });

    console.log(data);
}
