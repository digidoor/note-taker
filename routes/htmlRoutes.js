const path = require('path');
const router = require('express').Router();

router.get('notes', (req, res) =>
{
	console.log("Tried to send you notes.html");
	res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;