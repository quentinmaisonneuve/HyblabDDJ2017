'use strict';

var loaded = false;

var counter = (function () {
    var count = 1;

    return function () {
        return count++;
    }
})();

var index = {};
var data = {};
var files = 0;

// Load index file
fetch_json("data/index.json", function (json) {
    index = json;
    ready();
});

// Load csv data files
fetch_json("data/data.json", function (json) {
    load_files(json)
});

// Functions
function fetch_json(filename, callback) {
    fetch(filename)
    .then(function (response) {
        if (response.ok)
            return response.json();
        else
            return { err: "JSON file not found" };
    })
    .catch(function (error) {
        return { err: "Invalid JSON" };
    })
    .then(callback);
}

function load_files(json) {
    json.map(function (f) {
        data[f.area] = {};

        f.data.map(function (d) {
            var current = data[f.area];

            if (!(d.type in current)) {
                current[d.type] = {};
            }

            current = current[d.type];

            if ("subtype" in d) {
                current[d.subtype] = {};
            }

            d.docs.map(function (doc) {
                files += doc.files.length;
            });
        });

        f.data.map(function (d) {
            var current = data[f.area][d.type];

            if ("subtype" in d) {
                current = current[d.subtype];
            }

            d.docs.map(function (doc) {
                doc.files.map(function (file) {
                    load(current, doc.path + '/' + file.name + '.' + file.ext, file.content);
                });
            });
        });
    });
}

function load(data, filename, content) {
    d3.text(filename, function (file) {
        var rows = [];

        d3.dsvFormat(";").parseRows(file, function (row) {
            rows.push(row);
        });

        data[content] = {};

        var current = data[content];

        for (var i = 1; i < rows.length; ++i) {
            current[rows[i][0]] = {};
            for (var j = 1; j < rows[i].length; ++j) {
                current[rows[i][0]][rows[0][j]] = +rows[i][j];
            }
        }

        ready();
    });
}

function ready() {
    if (counter() === files) {
        loaded = true;
    }
}