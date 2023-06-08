const path = require('path');
const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req, res) =>
{
	console.log("API bit to get notes...");
	//var notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8')) || {};
	var notes = fs.readFileSync('db/db.json', 'utf8');
	console.log(notes);
	res.send( notes );
});

router.post('/notes', (req, res) =>
{
	var notes = JSON.parse( fs.readFileSync('db/db.json', 'utf8') );
	const note = req.body;
	console.log(note);
	notes.push(note);
	fs.writeFileSync('db/db.json', JSON.stringify(notes) );
	console.log(notes);
	res.send( JSON.stringify(note) );
});

module.exports = router;
