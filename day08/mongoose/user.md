# 用户认证：
* https://docs.mongodb.com/manual/tutorial/enable-authentication/

# 代码中连接
* https://docs.mongodb.com/manual/reference/connection-string/index.html

## 创建用户

```
内建的角色
数据库用户角色：read、readWrite;
数据库管理角色：dbAdmin、dbOwner、userAdmin；
集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；
备份恢复角色：backup、restore；
所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
超级用户角色：root // 这里还有几个角色间接或直接提供了系统超级用户的访问（dbOwner 、userAdmin、userAdminAnyDatabase）
内部角色：__system
角色说明：
Read：允许用户读取指定数据库
readWrite：允许用户读写指定数据库
dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile
userAdmin：允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户
clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。
readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限
readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限
userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限
dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。
root：只在admin数据库中可用。超级账号，超级权限




use admin
db.createUser(
  {
    user: "Gary",
    pwd: "first123",
    roles: [ { role: "root", db: "admin" } ]
  }
)
```

## mongod 认证方式启动
```
mongod --auth
```

## mongo 以用户名和密码登录
```
mongo -u "xxx"  -p "yyy"  --authenticationDatabase  "admin"

或者
use admin
db.auth("myUserAdmin", "abc123")
```
