
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

### 问题
```
1. 静态文件（如果使用res.sendFile发送文件，那么就指定 sendFile的第二个参数，指定发送文件的root）

2. 常用的http请求方法， get, post, put, delete, patch
get: 数据携带在http的url中，所以在发送请求时，不用发送http的主体部分，所以使用get方法获取数据时效率最高
post: 数据携带在http的主体中，所以在发送请求时，http的头部和主体都要发送，所以post方法常用于添加新数据
put: 数据携带在http的主体中，所以在发送请求时，http的头部和主体都要发送，所以put方法常用整体修改数据
patch: 数据携带在http的主体中，所以在发送请求时，http的头部和主体都要发送，所以patch方法常用局部修改
delete: 数据携带在http的主体中，所以在发送请求时，http的头部和主体都要发送，所以delete方法用于删除


3. 数据库的操作
  数据类型：前端的数据都必须按照后端数据库的类型要求来转换
  前端数据的过滤（xss，跨站脚本攻击）：用户的输入都是不可信的
  xss，跨站脚本攻击: 存储型，反射型， dom解析型
  数据过滤：对特定符号进行转换，比如：str.replace(/</g, "&lt;");
          <   &lt;
          >  &gt;
          &  &amp;
          '  &#39;
          "  &quot;

```
