exports.index = function(req, res){
  res.render('index', { title: 'Bookoo' });
};

exports.books = function(req, res) {
  res.render('index', { title: 'Listing Page' });
}

exports.bookDetail = function(req, res) {
  res.render('detail', { title: 'Detail Page', item: req.params.book });
}