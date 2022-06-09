# winddata-js-server
这是一个在wind-js-server基础上进行改进的风场数据服务应用。关于windy-js-server,[点击这里](https://github.com/danwild/wind-js-server)

这是一个Node应用，使用前，先执行：
```
npm install
```


# 安装到服务
## windows
1. 在终端执行 install_service.bat
```cmd
install_service.bat
```
会在系统服务中安装名为Wind Data Server的服务。
2. win + r，service，然后启动服务。
## linux
1. 安装pm2
```cmd
npm i pm2 -g
```

2. 使用pm2启动及管理服务
```cmd
pm2 start app.js --name windyserver
```

重启可以
```cmd
pm2 reload windyserver
```

