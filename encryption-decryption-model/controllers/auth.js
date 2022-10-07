const mysql =require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const db = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"password",
    database:"employee",
});


exports.register = (req, res) =>{
    console.log(req.body);

    // const name = req.body.name;   // why we given name means bcz we given in register.hbs in file we given name only // name="password"> //name="email"> etc
    // const email = req.body.email;
    // const password =req.body.password;
    // const passwordConfirm = req.body.passwordConfirm;



const {name, email, password, passwordConfirm} = req.body;  // or we give this one also  // why we given name means bcz we given in register.hbs in file we given name only // name="password"> //name="email"> etc

db.query("select * from users where email = ?", [email], async (error, results) =>{     // checking if email id exit or not
    if(error) {
        console.log(error)
    }
    if( results.length > 0 ) {
        res.json({
        // return res.render('register', {
            message: "that email is already in use",     // it calling mail to the register.hbs //{{ #if message }} //  <h4 class="alert alert-danger mt-4">{{message}}</h4> //  {{/if}}
       
        })
    } else if ( password !== passwordConfirm ) {
        return res.render('register', {
            message: "passwords do not match"
        });
    }

    let hashedPassword = bcrypt.hashSync(password, 8);  // 8 meanes how many rounds or times do u want to hash password
    console.log(hashedPassword);

    db.query("INSERT INTO users SET ?", {name: name, email:email, password:hashedPassword}, (error, results) =>{
        if(error){
        console.log(error)
        } else {
            console.log(results);
            res.json({
            // return res.render('register', {
                message: "user registered"
            });
        }
    })
}
),

router.post('/auth_login', function(req,res,next){        // user login through email and password

    var email = req.body.email;
    var password =req.body.password;
  
    var sql = 'select * from users where email = ?;';
  
    con.query(sql,[email], function(err,result, fields){
      if(err) throw err;
  
      if(result.length && bcrypt.compareSync(password, result[0].password)){  //  comapresync is comapring the password existing psw and login psw right or not
        req.session.email = email;
        res.redirect('/home');
      }else{
        res.json({
                message: "login sucessfuly"
        })
      }
    });
  });

// res.send("form submitted")
}