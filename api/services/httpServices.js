const https = require('https');

module.exports={
    httpcall:function (url){
        console.log(url)
        return new Promise((resolve,reject)=>{
            https.get(url,{observe:"response"},resp=>{
              var bodyChunks = [];
              var Respon=[];
        //      console.log(resp)
              resp.on('data', function(chunk) {
                // You can process streamed parts here...
                bodyChunks.push(chunk);
              }).on('end', function() {
                  if(bodyChunks != null){ 
                    const BODY= JSON.parse(bodyChunks);
                    console.log(BODY.articles)
                    Respon.push(BODY.articles);
                    console.log(JSON.stringify(Respon));
                    bodyChunks=null;
                  }
                  resolve(Respon);            
      
                })
             
          }).on('error', err => {
              console.log('Error: ', err.message);
               reject(err.message);
            });
            });
 
    },
}