var express = require("express");
var router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ menuItems: [], orders: [] }).write();

router.post("/", function (req, res, next) {
	const items = req.body;
	setTimeout(() => {
		db.set("orders", { items }).write();
		res.end();
	}, 3000);
});

module.exports = router;
