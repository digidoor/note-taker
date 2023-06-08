const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) =>
{
	console.log("Tried to send you index.html"); // This never fires for reaons I don't understant.
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) =>
{
	console.log("Tried to send you notes.html"); // This fires just fine.
	res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;
