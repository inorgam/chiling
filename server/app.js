const express = require('express')
const app = express()


const { query, add, del, update } = require('./json-parser'); // 导入 处理JSON文件的模块

app.use(express.urlencoded({ extended: true })); // 接收查询字符串格式请求体


app.get('/api/v1/caigou', async (req, res) => {
  let data = await query();
  res.send(
    {
      data,
      "meta": {
        "msg": "用户创建成功",
        "status": 201
      }
    }
  );
})


app.post('/api/v1/add', async (req, res) => {
  let row = req.body;
  let r = await add(row);
  if (r === undefined) {
    res.send(
      {
        "meta": {
          "msg": "创建成功",
          "status": 201
    }})
  }
})


app.put('/api/modified', async (req, res) => {
    let row = req.body;
    let r = await update(row);
    if (r === undefined) {
      res.send( 
        {
        "meta": {
          "msg": "修改成功",
          "status": 201
    }}
    )
    }
  })

app.delete('/api/del', (req, res) => {
    let id = req.query.id;
  	obj.del(id)
    res.send(
      {
        "meta": {
          "msg": "删除成功",
          "status": 201
    }}
    )
});



app.listen(3001, () => console.log('启动了'));
