# 用户认证：
* https://docs.mongodb.com/manual/tutorial/enable-authentication/

# 代码中连接
* https://docs.mongodb.com/manual/reference/connection-string/index.html

## 创建用户

```
use admin
db.createUser(
  {
    user: "Gary",
    pwd: "first123",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
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
