const express = require("express");
const cors = require("cors");
const router = require("./routes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

const PORT = 3001;
app.listen(PORT, () => {
 console.log(`server running on port ${PORT}`);
});

module.exports = app;