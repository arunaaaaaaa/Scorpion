const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'software'
  })
  const crypto = require("crypto");


module.exports={
    CheckUser:function(username,password,operation){
        let test=new Promise((resolve,reject)=>{
            // let query="select * from USERS";
            // const values = ['USERS'];
            // connection.query(query, (err, rows, fields) => {
            //     if (err) throw err
              
            //     console.log('The solution is: ', rows[0])
            //   })
            if(operation=='signin'){
                let query="select USERNAME from UserDetails where username='"+username+"'";
                connection.query(query,(err,rows,fields)=>{
                    if(err) throw err
                    console.log('The solution is: ', rows[0])
                    if(rows.length=='0'){
                        console.log('query2')
                        const id = username.length;
                        let query1="insert into UserDetails(userID,username,pass_word) values("+id+",'"+username+"','"+password+"')"
                        console.log(query1);
                        connection.query(query1,(error,row,field)=>{
                            if(error) throw error
                            console.log(row);
                            console.log('inserted');
                            resolve('USERINSERTED');

                        })
                    }
                    else{
                        resolve("user exists")

                    }
                })
            }
             else if(operation=='login'){
                console.log("login called");
                let query3="select * from UserDetails where username='"+username+"' AND pass_word='"+password+"'"
                connection.query(query3,(err,rows,fields)=>{
                    if(err) throw err
                    console.log('The solution is: ', rows.length)
                    if(rows.length!=0){
                    resolve(rows[0])
                    }
                    else{
                        resolve("user doesnot exist")
                    }
            })
            connection.end()

        }
    })  
    return test;

    },
    AllArticles:function(){
        let promise=new Promise((resolve,reject)=>{
            query = 'select * from ARTICLEDETAILS';
            connection.query(query,(err,rows,fields)=>{
                if(err){
                    reject(error.message);
                }
                else{
                    resolve(rows[0]);
                }
            })
        });
        return promise;
    },
}