exports.index = function(req, res) {
	res.render('index', { title: 'Hello world' });
};

exports.partials = function(req, res) {
	res.render('partials/'+req.param('file'));
}

exports.login = function(req, res) {

};

exports.register = function(req, res) {
	
};