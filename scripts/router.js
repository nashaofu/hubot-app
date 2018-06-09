module.exports = robot => {
  const path = encodeURIComponent('你好')
  robot.router.get('/' + path, (req, res) => {
    res.send('你好！😄')
  })
}
