exports.index = function(req, res){
  res.render('index', { title: 'Index Page' });
};

exports.listing = function(req, res) {
  res.render('index', { title: 'Listing Page' });
}

exports.detail = function(req, res) {
  res.render('detail', { title: 'Detail Page', item: req.params.itemId });
}