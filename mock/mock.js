const mockjs = require('mockjs')

const {
  getProfileAdvancedData,
  getProfileBasicData
} = require('./modules/profile')

module.exports = {
  'GET /api/currentUser': {
    name: 'Serati Ma',
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    notifyCount: 12
  },
  'POST /api/forms': (req, res) => {
    res.send({
      message: 'ok'
    })
  },
  'GET /api/tags': mockjs.mock({
    'list|100': [
      {
        name: '@city',
        'value|1-100': 150,
        'type|0-2': 1
      }
    ]
  }),
  'GET /api/profile/basic': getProfileBasicData,
  'GET /api/profile/advanced': getProfileAdvancedData,
  'POST /api/login/account': (req, res) => {
    const { password, userName, type } = req.body
    if (password === '888888' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin'
      })
      return
    }
    if (password === '123456' && userName === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user'
      })
      return
    }
    res.send({
      status: 'error',
      type,
      currentAuthority: 'guset'
    })
  }
}
