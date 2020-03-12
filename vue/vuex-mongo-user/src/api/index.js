// 数据驱动页面
const _users = [
  {
    "address": {
      "city": "Los Angeles",
      "state": 'California',
      "pincode": "123"
    },
    "tags": [
      "music",
      "blogs",
      "cricket"
    ],
    "name": "Tom Benzamin"
  },
  {
    "address": {
      "city": "景德镇",
      "state": '江西',
      "pincode": "330000"
    },
    "tags": [
      "coding",
      "blogs"
    ],
    "name": "xiaop"
  },
  {
    "address": {
      "city": "武汉",
      "state": '湖北',
      "pincode": "331000"
    },
    "tags": [
      "coding",
      "swim"
    ],
    "name": "dap"
  },
    {
    "address": {
      "city": "芜湖",
      "state": '安徽',
      "pincode": "331000"
    },
    "tags": [
      "coding",
      "games"
    ],
    "name": "xiaow"
  }
]
// 默认输出 cb 传入的参数
export default {
  fetchUsers(cb) {
    setTimeout(() => {
      cb(_users);
    }, 1000)
  }
}