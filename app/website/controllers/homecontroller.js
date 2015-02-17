var HomeController = function(){}

HomeController.index = function(req, res){
	res.locals._csrf = req.csrfToken();
	res.render('index',{});
}

module.exports = HomeController;