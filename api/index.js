import express from 'express';
// add type:module in package-json to use import instead or require
const app= express();
app.listen(3000,()=>{
    console.log('server is running on port 3000');

}
);