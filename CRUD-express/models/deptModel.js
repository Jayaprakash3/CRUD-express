const mongoose = require('mongoose');
var deptSchema = mongoose.Schema({
    departmentname: { type: String }
});
var deptModel = mongoose.model("department", deptSchema);
module.exports = deptModel;