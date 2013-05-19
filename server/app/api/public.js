var config = require('../../config/config').config().db,
    mongojs = require('mongojs'),
    db = mongojs(config.uri, config.collections);

//Get items by suburb and medicaltype
exports.count = function (req, res, next) {
	db.posts.find({status : 1, type : 1 }).count(function (err, cnt) {
		if (err) return next(err);
		req.count = cnt;
		next();
	})
}

exports.items = function (req, res, next) {
	var perpage = parseInt(req.query.$perpage),
		page = parseInt(req.query.$page);

	db.posts.find({status : 1, type : 1 }).skip( (page - 1) * perpage ).limit( perpage ).sort({ date : -1 }, function (err, posts) {
		if (err) return next(err);
		res.json({ error : null, posts : posts, info : { totalRecords : req.count } });
	})
}

//Get suburb name list by start charactors
exports.itemslug = function (req, res, next) {
	db.posts.findOne({ slug : req.params.slug }, function (err, post) {
		if (err) return next(err);
		if (!post) return next(new Error( req.params.slug + ' not found.'))
		res.json(post);
	})
};