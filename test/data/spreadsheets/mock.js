'use strict';

let GoogleSpreadsheet = class GoogleSpreadsheet {
  constructor(sheetKey, info, error) {
    this.sheetKey = sheetKey;
    this.info = info;
    this.error = error;
  }

  getInfo(callback) {
    callback(this.error, this.info);
  }
};
module.exports.GoogleSpreadsheet = GoogleSpreadsheet;

let Info = class Info {
  constructor(worksheets) {
    this.worksheets = worksheets;
  }
};
module.exports.Info = Info;

let Worksheet = class Worksheet {
  constructor(title, id, rows, error) {
    this.title = title;
    this.id = id;
    this.rows = rows;
    this.error = error;
  }

  setError(error) {
    this.error = error;
  }

  getRows(options, callback) {
    callback(this.error, this.rows);
  }
};
module.exports.Worksheet = Worksheet;