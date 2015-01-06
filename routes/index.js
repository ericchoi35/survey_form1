module.exports = function Route(app){
  app.get('/', function(req, res){
    res.render('index', {title:'Survey Form', session_data:req.session});
  });

  app.post('/process', function(req, res){
    console.log('POST INFO', req.body); //notice that the post information is stored in req.body
    req.session.name = req.body.name;
    req.session.language = req.body.language;
    req.session.location = req.body.location;
    req.session.comment = req.body.comment;
    req.session.sessionID = req.sessionID; //unique sessionID for the user
    req.session.save(function() {
       res.redirect('/result');
    });
  });

  app.get('/result', function(req, res){
  	res.render('result', {title:'Survey Form', session_data:req.session});
  });
}