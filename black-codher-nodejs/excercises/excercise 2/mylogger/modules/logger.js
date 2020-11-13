const fs = require("fs");

const log = {
    info: function (msg) {
        console.log(msg);
    },
    write: function (msg) {
        fs.writeFile("logfile.txt", msg, function (err, data) {
            if (err) {
                console.log(`Failed to write data!: '${data}'`);

                return console.log(err);
            }
        });
    }
}

exports.logger = log;


