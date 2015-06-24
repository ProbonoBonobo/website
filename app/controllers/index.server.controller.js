exports.render = function(req, res) {
	// if (req.session.lastVisit) {
	// 	console.log(req.session.lastVisit);
	// }

	// req.session.lastVisit = new Date();

	res.render('index', {
		title: 'good day!',
		body: 'my name is kevin zeidler and i\'m a web developer. i work primarily on the mean stack (MongoDB, Express, Angular.js, Node)'
	});
};