const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();
const port = 3003;
const ipAddress = '192.168.86.8';

// 指定静态文件夹
app.use(serve('static_folder')); // 替换为你的静态文件夹路径

// 启动服务器
app.listen(port,() => {
  console.log(`Server is running at http://${ipAddress}:${port}`);
});
