import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import bodyParser from 'body-parser'
import webpack from 'webpack'

import mongoose from 'mongoose'

const catering = require('./router/catering');



// 引入history模块
import history from 'connect-history-api-fallback'

// 正式环境时，下面两个模块不需要引入
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../../build/webpack.dev.conf'



//mongodb配置
/*global.dbHandle = require('./database/dbHandle');*/
mongoose.connect('mongodb://localhost/53project');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error;'));
db.once('open',function () {
    console.log("Connected.");
});
db.on('disconnected',function () {
    console.log('Disconnected');
});

//注意：在查询之前，向mongodb数据库中对应的表里面
// 任意添加一条数据，否则，你查询出来的数据为空！！！



const app = express();

// 引入history模式让浏览器进行前端路由页面跳转
app.use(history())

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))



const compiler = webpack(config)
//webpack 中间件
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'views')))
app.get('/', function (req, res) {
  res.sendFile('./views/index.html')
})

//自定义路由
app.use('/tradeListBar',catering);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  console.log(err)
  res.send(err.message)
})

// 设置监听端口
const SERVER_PORT = 4000
app.listen(SERVER_PORT, () => {
  console.info(`服务已经启动，监听端口${SERVER_PORT}`)
})

export default app
