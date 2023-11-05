const asyncHandler = require('express-async-handler');
const uploadCsv = asyncHandler(async (req, res) => {
    console.log('data of CSV', req.body);
});
module.exports = { uploadCsv };
