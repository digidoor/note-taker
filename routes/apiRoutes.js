const path = require('path');
const router = require('express').Router();
const fs = require('fs');

router.get('/api/notes' (req, res) =>
{
	console.log("API bit to get notes...");
	var notes = JSON.parse(readFile('db/db.json')) || {};
	res.sendFile( notes );
	var x;
}

module.exports = router;
