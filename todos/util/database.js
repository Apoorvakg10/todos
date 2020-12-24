const{Client}=require('pg');
const client=new Client({
    user:'postgres',
    database:'todos',
    host:'localhost',
    password:'appu',
    port:5432
});
 client.connect().then(res=>{
     console.log('PostgreSQL connected');
 }).catch(err=>{
     console.log('Error while connecting to databse',err);
 });

 module.exports=client