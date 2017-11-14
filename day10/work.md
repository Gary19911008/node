
## 简单登录确认

## 技术点
* express  mongodb  redis


## 流程
### 前端页面
```
login.html   index.html

127.0.0.1:8000/ 判断是否已经登录
已经登录，直接跳到 index.html (路由可以是 /index)
没有登录，那么弹出 login.html (路由可以是 post /login  登录)


index.html中包含logout登出按钮 (路由可以是 /logout)
点击登出之后，重新进入时，仍然需要重新登录

```

### 后端处理
```

redis中使用hash 存储 sessionID:  "sessionID:" + req.sessionID   login  true


路由： get / ,  直接 redirect("/index")
路由： get /index, 需要判断req.sessionID是否可以从redis数据库中找到
              1.如果找到，说明已经登录，直接返回给用户index.html页面
              2.如果没有找到，仍然 res.redirect("/login") login.html页面


路由：get  /login 负责返回login.html  

路由：post /login
  说明是第一次登录或者登录session已经过期，此时需要从mongodb数据库中读取用户名和密码,判断是否匹配
  1 如果不匹配，那么直接给用户返回json数据，提示用户名或者密码不对
  2 如果匹配，那么将 req.sessionID存入到redis数据库中，并设置该key的过期时间


路由: post /logout  直接将req.sessionID  从redis数据库中删除即可
                    重定向到 res.redirect("/login")

```
