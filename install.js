var Service = require('node-windows').Service;

var svc = new Service({
  name: 'Wind Data Server',
  description: '风场数据服务',
  script: 'app.js'
});

svc.on('install', () => {
  svc.start()
  console.log('service installed..')
});

svc.install();