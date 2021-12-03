const express =  require('express');
const morgan = require('morgan');

const fakeAllDeals = require('./AllDeals.json');
const fakeSingleDeal = require('./SingleDeal.json');
const fakeAllStores = require('./AllStores.json');


const { createProxyMiddleware} = require ('http-proxy-middleware');

const app = express();

const PORT = 5000;
const HOST= "localhost";
const API_URL = "https://www.cheapshark.com/api/1.0" ;

const RANDOM_URL = "https://randomuser.me/api";

app.use(morgan('dev'));

/* Start: Dummy API calls section **/


const key = 'íd=';
app.get('/api/deals?', (req, res, next) => { 
  if(!req.query.key) next();
  res.json(fakeAllDeals);
})

app.get('/api/singledeal', (req, res) => {
  res.json(fakeSingleDeal);
})


app.get('/api/stores', (req, res) => {
  res.json(fakeAllStores);
})

/* End: Dummy API calls section **/

// app.use('/api', 
//   createProxyMiddleware( { 
//     target: API_URL, 
//     changeOrigin :  true,
//     pathRewrite: {
//       [`^/api`]: '',
//     },
// }));

app.use('', (req, res, next) => {
  if(req.headers.authorization) next()

})

app.listen(PORT, HOST, () => {
  console.log(`STARTING PROXY AT ${HOST}: ${PORT}`)
})