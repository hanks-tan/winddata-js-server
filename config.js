module.exports = {
  proxy: '',  // 公司公网访问代理
  corsList: [                 // 允许访问的域
    'http://127.0.0.1:5000',
    'http://127.0.0.1:5502',
    'http://10.192.2.30:5502',
  ],
  port: '5001',
  pingDataInterval: 7200000, // 下载数据的时间间隔（单位毫秒），慎用此参数，间隔太短有可能被封IP,默认2小时
  init: {
    days: 30, // 数据的有效期
    getLastDataInterval: 536000 // 项目初始化时，获取最近一段时间数据的请求间隔
  }
}