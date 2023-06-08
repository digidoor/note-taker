const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) =>
{
	console.log("API bit to get notes...");
	//var notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8')) || {};
	var notes = fs.readFileSync('db/db.json', 'utf8');
	console.log(notes);
	console.log( uuidv4() );
	res.send( notes );
});

router.post('/notes', (req, res) =>
{
	var notes = JSON.parse( fs.readFileSync('db/db.json', 'utf8') );
	var note = req.body;
	console.log(note);
	note.id = uuidv4();
	console.log("note: ", note);
	notes.push(note);
	fs.writeFileSync('db/db.json', JSON.stringify(notes, null, '\t') );
	console.log(notes);
	console.log( uuidv4() );
	res.send( JSON.stringify(note) );
});

module.exports = router;
