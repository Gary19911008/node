
## 学生信息管理系统

### 需求
*  前端： login.html  admin.html
*  后端： 登录校验，数据库操作 (express)
*  mongoose操作数据库
*  可以使用Bootstrap

### login.html
```
接口说明：
发送： post   /login    {name: xxx, passwd: xxx}
接收: sucess {status: 1, url: "admin.html"} 需要自己跳转到执行跳转
      error {status: 0, message: "xxxx"}

```

### admin.html
```
接口说明:
添加  post  /stu
删除  delete  /stu
查找  get  /stu
更新  put  /stu

```
