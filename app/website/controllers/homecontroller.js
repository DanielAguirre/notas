var HomeController = function(){}

HomeController.index = function(req, res){	
	res.render('index',{});
}

module.exports = HomeController;