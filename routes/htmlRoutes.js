const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) =>
{
	console.log("Tried to send you index.html");
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('notes', (req, res) =>
{
	console.log("tried to send you notes.html");
	res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;
