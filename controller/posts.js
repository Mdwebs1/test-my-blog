const postModel = require('../models/posts')

module.exports={
    index:(req, res) => {
        postModel.find({})
        .then((data) => {console.log(data);
            res.locals.posts = data;
            res.render('posts/index')
        
    }).catch((err) => {console.log(err);})
    },
  createForm:(req, res) => {
      res.render('posts/create');
  },
    create:(req,res)=>{
    new postModel({ 
        title: req.body.title,
        text: req.body.text,
        userID: '621240f0872bcca1ef826cc5'  
   }).save((err)=>{
    if(err){
        console.log(`Error occurred:${err}`);
    }else{
        console.log('posts added!');
        res.end();
    }
});
},
updateForm:(req, res)=>{
    postModel.findById({_id: req.params.id})  
    .then(post =>{
        res.locals.post = post;
        res.render('posts/edit');
    }).catch(err =>{console.log(`Error occurred:${err}`)})
},
update:(req,res)=>{
    postInfo = {
        title:req.body.title,
        text:req.body.text,
    };
    postModel.updateOne(
        {_id:req.params.id},
        postInfo)
    .then(()=>{
        console.log('post updated!');
        res.redirect('/posts');
    }).catch((err)=>console.log(`Error occurred:${err}`));
},

delete:(req,res)=>{
    postModel.deleteOne(
        {_id:req.params.id}
        ).then(()=>{
            console.log('post deleted!');
            res.redirect('/posts');
        }).catch((err)=> console.log(`Error occurred:${err}`));
},
getWithUsers:(req, res)=>{
    postModel.find({}).populate('userID').exec((err,data)=>{
        if(data){
            res.locals.posts= data
            res.render('/posts/userPosts')
        }else{console.log(`Error occurred:${err}`)}
    })
}
}

