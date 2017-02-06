'use strict';

var index = {
    loaded: false,
    is_loaded: function () { return loaded; }
};

var data = {
    loaded: false,
    is_loaded: function () { return loaded; },
    files: {
        count: 0,
        counter: (function () {
            var count = 0;

            return function () {
                return ++count;
            }
        })()
    }
};

// Load index file
fetch_json("data/index.json", function (json) {
    Object.keys(json).map(function (key) {
        index[key] = json[key];
    });

    index.loaded = true;
});

// Load csv data files
fetch_json("data/data.json", function (json) {
    load_files(json)
});

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

        // Initialize data content and count files before loading everything
        f.data.map(function (d) {
            var current = data[f.area];

            if (!(d.type in current)) {
                current[d.type] = {};
            }

            current = current[d.type];

            if ("subtype" in d) {
                current[d.subtype] = {};
            }

            // Count files
            d.docs.map(function (doc) {
                data.files.count += doc.files.length;
            });
        });

        // Load files
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

function load(current_data, filename, content) {
    d3.text(filename, function (file) {
        var rows = [];

        // d3.js v4.x
        //d3.dsvFormat(";").parseRows(file, function (row) {

        // d3.js v3.x
        d3.dsv(";").parseRows(file, function (row) {
            rows.push(row);
        });

        current_data[content] = {};

        var current = current_data[content];

        for (var i = 1; i < rows.length; ++i) {
            current[rows[i][0]] = {};
            for (var j = 1; j < rows[i].length; ++j) {
                current[rows[i][0]][rows[0][j]] = +rows[i][j];
            }
        }

        if (data.files.counter() === data.files.count) {
            data.loaded = true;
        }
    });
}