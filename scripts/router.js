const path = require('path')
const express = require('express')
const inquirer = require('inquirer')

const duanzi = [
  {
    type: 1,
    msg: '科比有个球迷是个程序员，也很喜欢打篮球，有一天，这人终于见到科比本人，他就问：科比，为什么你能做到这么厉害？科比说：你知道洛杉矶凌晨4点的样子吗？程序员回：知道啊，你问这干嘛？那会儿我还在加班呢。科比：…………',
  },
  {
    type: 1,
    msg: '某男是程序员，每天半夜三更才回家。某女抱怨：“你就不能提早点回家么？”某男：“好，一定。”于是下次某男一直写代码到天亮提着油条豆浆才回家。'
  }
]

const joke = [
  {
    type: 2,
    msg: 'https://pic3.zhimg.com/80/047bff3c44cd8adb9f4b00850d1d6408_hd.jpg'
  },
  {
    type: 2,
    msg: 'https://pic2.zhimg.com/50/v2-bd27c7aa4232188a955ca0826ee66841_hd.gif'
  },
  {
    type: 2,
    msg: 'https://pic2.zhimg.com/50/v2-63dd5faae0b4073816967eac8bb9903d_hd.gif'
  },
  {
    type: 2,
    msg: 'https://pic2.zhimg.com/80/v2-76a2c0c5084374fe331d582d08216bb4_hd.jpg'
  },
  {
    type: 2,
    msg: 'https://pic2.zhimg.com/80/v2-453ba9d1be1f285b822d22b59cf7ce08_hd.jpg'
  },
  {
    type: 2,
    msg: 'https://pic2.zhimg.com/80/v2-5f2e6794feab619852d437d432bcfe4e_hd.jpg'
  },
  {
    type: 2,
    msg: 'https://pic1.zhimg.com/80/v2-8b7a75ed4419372322a16d996a727f38_hd.jpg'
  },
  {
    type: 2,
    msg: 'https://pic4.zhimg.com/80/v2-198a5a1bae649abc3b77420c9e08b60c_hd.jpg'
  },
  {
    type: 2,
    msg: 'https://pic3.zhimg.com/80/v2-ab7e8db563c0af493559cd49d2d1c4a1_hd.jpg'
  },
  {
    type: 2,
    msg: 'https://pic3.zhimg.com/80/v2-120cf4e1facb3126847f3d33b6c9a6a6_hd.jpg'
  },
  {
    type: 2,
    msg: 'https://pic2.zhimg.com/80/v2-dad31907c51de028e98b48351c93ecc6_hd.jpg'
  },
  {
    type: 2,
    msg: 'https://pic2.zhimg.com/80/7cae0c96f8a97ac36537f714ae8daaaf_hd.jpg'
  }
]

module.exports = robot => {
  const app = express()
  const sdir = path.join(__dirname, '../static')
  robot.router.use('/static', express.static(sdir))
  robot.router.post('/api', (req, res) => {
    const msg = req.body.msg
    if (msg) {
      if (/几点|时间/.test(msg)) {
        return res.send({
          msg: new Date().toLocaleString()
        })
      } else if (/搞笑|笑话|段子/.test(msg)) {
        let m = Math.floor(Math.random() * duanzi.length)
        return res.send(duanzi[m] || duanzi[0])
      } else if (/图片|斗图/.test(msg)) {
        let m = Math.floor(Math.random() * joke.length)
        return res.send(joke[m] || joke[0])
      } else if (/IE/i.test(msg)) {
        return res.send({
          type: 2,
          msg: 'https://pic1.zhimg.com/50/v2-56c99509ec13c77101461858a407418b_hd.gif'
        })
      } else {
        inquirer.prompt([
          {
            name: 'msg',
            type: 'input',
            message: msg
          }
        ]).then(answers => res.send({
          type: 1,
          msg: answers.msg
        }))
      }
    }
  })
}
