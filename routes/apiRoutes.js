const path = require('path');
const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req, res) =>
{
	console.log("API bit to get notes...");
	var notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8')) || {};
	res.sendFile( notes );
});

module.exports = router;
