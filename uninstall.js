var Service = require('node-windows').Service;

var svc = new Service({
  name: 'Wind Data Server',
  description: '风场数据服务',
  script: 'app.js'
});

svc.on('uninstall', () => {
  console.log('uninstall completed...');
  console.log('the service exists:', svc.exists)
});

svc.uninstall();