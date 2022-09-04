const { join } = require('path');
const fs = require('then-fs');

// 拼接文件路径
const filename = join(__dirname, 'db.json');


async function query() {
  let data = await fs.readFile(filename, 'utf-8');
  return JSON.parse(data);
}

async function add(row) {
  let res = await query();
  let id = res[res.length - 1].id + 1;
  row.id = id;
  res.push(row);
  return fs.writeFile(filename, JSON.stringify(res));
}

async function del(id) {
  let res = await query();
  let result = res.filter(item => item.id != id);
  return fs.writeFile(filename, JSON.stringify(result));
}


async function update(row) {
  let res = await query();
  let index = res.findIndex(item => item.id == row.id);
  res.splice(index, 1, row);
  return fs.writeFile(filename, JSON.stringify(res));
}



module.exports = { query, add, del, update };

