
## redis  http://doc.redisfans.com

```
set  key  value  ex  过期时间秒
get key  获取
del key 删除


哈希：一个key存储多个键值对
HMSET key field value [field value ...]

hgetall key 获得该key上所有的键值对

hget key field  获得一个key上指定的field值

hkeys key 获得所有的field名

hlen key field的个数

hset key field name  设置一个键值对

hdel key field ...  删除一个或者多个field

del key  删除整个哈希


列表：
lpush key  value .... value   存储
lrange key  start stop  列表的遍历
lpop key  删除第一个
llen key  得到该列表中的数据个数
lindex hobby 2  获得指定位置的数据

LREM key count value  //根据个数，去删除指定value



```
