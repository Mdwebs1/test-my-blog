// const { deleteOne } = require('../models/users')
const userModel = require('../models/users')

module.exports={
    index: (req,res) => {
        userModel.find({}).then((data) => {
            
            res.locals.users = data
            res.render('users/index')
        }).catch((err) => {
            console.error(`Error Occures:${err}`)
        })
    },
    createForm:(req, res) => {
        res.render('users/create')
    },
    updatedForm:(req, res) => {
        userModel.findById({_id:req.params.id})
        .then((user) =>{
            res.locals.user = user;
            res.render('users/edit');
        }).catch((err) => {console.error(`Error Occures:${err}`)})
    },
    create:(req, res) => {
        new userModel ({
            name:{
              firstName:req.body.fname,
              lastName:req.body.lname,
        },
           DoB: req.body.DoB,
           gender:req.body.gender,
           userName:req.body.userName,
           email: req.body.email,
           password: req.body.password,
           isAdmin:false 
        }).save((err)=>{
          if(err){
              console.log(`Error Occures:${err}`)
          }else{
              console.log('user added');
              res.end();
          }
        });
    },
    update:(req, res)=>{
        let userInfo ={
            name: {
                firstName:req.body.fName,
                lastName:req.body.lName,
            },
            DoB:req.body.DoB,
            email: req.body.email,
        }
        userModel.updateOne({
            _id:req.params.id,
        },
        userInfo 
        ).then(()=>{
            console.log('user updated');
            res.redirect('/users');
        }).catch(err=>{console.log(`Error Occurd:${err}`)});
    },
    delete:(req, res)=>{
        userModel.deleteOne({_id:req.params.id})
        .then(()=>{console.log('user deleted');
        res.redirect('/users');
    }).catch(err=>{console.log(`Error Occurd:${err}`)});  
    }
            
}
