var express = require("express");
var router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

// Do we need this?
db.defaults({ menuItems: [], orders: [] }).write();


router.get("/", function (req, res, next) {
	const menuItems = db.get("menuItems").value();
	console.log(menuItems);
	res.json(menuItems);
});



module.exports = router;
