var express = require('express');
var router = express.Router();


const { Client } = require('pg');
const connectionString = 'postgres://postgres:sibin@123@localhost:5432/skillero';
const client = new Client({
    connectionString: connectionString
});
client.connect();

router.get('/success', function(req, res, next) {
    res.render('learners-page', { title: 'Express' });
  });
  
  router.post('/success', (req, res) => {
    var fullname = req.body.fullname;
    var email = req.body.email;
    var password = req.body.password;
   
    client.query("select email from signup", (err, result) =>{
      
      var pass = result.rows;
      
      for(i = 0; i < pass.length; i++){
        var em = new Array (pass[i].email);
        
      }
      if(em == email){
          
            res.render('index',{title: 'express', text: 'User already exists'});
            console.log('true');
    
          }else{
            client.query("insert into signup(fullname, email, password) values($1, $2, $3)",[fullname, email, password]);
            res.render('learners-page',{ title: 'Express' });
            console.log('false');
          }
    
    
      
      
    });
    
    
    
    
    
     
      
    
      
    
      
    
    
    
    
    
    
  });
  
   


module.exports = router;
