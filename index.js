const port = process.env.port || 5000;
const app = require('./app');

app.listen(port, () =>{
 console.log(`Listening on port ${port}`)
});