const express = require('express')
var cors = require('cors')
var test=require('./services/authServices')
var app = express()
var bodyparser=require('body-parser')
var httpService=require('./services/httpServices')
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors())
const port = 3000
var jsonParser=bodyparser.json()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home',(req,res)=>{
  httpService.httpcall('https://newsapi.org/v2/top-headlines?country=us&apiKey=4beba1cc87394519821078d27cfefd96').then((data)=>{
      //console.log(JSON.stringify(data.articles));
      res.json(data);
  })
  })
  app.post('/login',jsonParser, (req, res,next) => {
     test.logincheck(req.body.username,req.body.password).then((data)=>{
      //    console.log(JSON.stringify(data))
      //    response=[{
      //        token:data[0].token,
      //        expiresIn:'1800s',
      //        username:data[0].username,
      //        emailId:data[0].emailId,
      //        contactNo:data[0].contactNo
      //    }];
  
         res.json(data);
     });
  })
  app.post('/signin',jsonParser,(req,res,next)=>{
      console.log(req.body.username+""+req.body.password);
       test.sigin(req).then((data)=>{
          res.json({
              token:data,
              expiresIn: '1800s'
          });
  
       });    
  })
  app.post('/getSavedArticles',(req,res)=>{
      articlesService.requestArticles(req.body.username).then((data)=>{
          if(data==null)
          {
              res.json({data:'data not exists'})
          }
          else{
          res.json(data);
          }
      })
  })
  
  app.get('/articles',(req,res)=>{
      article.allarticle().then((data)=>{
          res.json(data);
      })
  })
  app.post('/articleDetails',test.authenticateToken,(req,res)=>{
      article.ArticleDetails(req.body.articleheader).then((data)=>{
          if(data==null)
          {
              res.json({data:'data not exists'})
          }
          else{
             res.json(data);
          }
      })
  })
  app.post('/feedback',(req,res)=>{
      console.log(req.body.username);
      
          article.postComment(req.body).then((data)=>{
                  res.json(data)
              
          })
  })
  app.post('/topic',test.authenticateToken,(req,res)=>{
      formsService.addTopic(req.body.topic,req.body.username).then((data)=>{
          res.json(data);
      })
  })
  app.post('/getTopic',test.authenticateToken,(req,res)=>{
      formsService.getFormsComment(req.body.topic).then((data)=>{
             res.json(data)
      })
  })
  app.post('/submitcomment',test.authenticateToken,(req,res)=>{
      formsService.addComments(req.body.topic,req.body.username,req.body.comment,req.body.dateTime).then((data)=>{
          res.json(data)
      })
  })
  app.get('/gettopics',test.authenticateToken,(req,res)=>{
      formsService.getTopics().then((data)=>{
          res.json(data)
      })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})