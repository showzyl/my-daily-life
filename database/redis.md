### redis study

* redis-cli ping  检查启动没有
* redis-cli shutdown  关闭redis
* set key value 设置某值
* keys * 获取所有设置的值
* get key 获取一个值
* type key 获取key的数据类型
* get key1 key2 获取一组值
* getset key value 设置key为value并返回旧值
* del key 删除某值
* exists key 检测是否存在
* rename keyname newname 修改key名
* keys keyname 取出key值
* expire keyname time 设置过期时间
* pttl keyname 返回key过期时间(以毫秒为单位)
* ttl keyname 返回key过期时间(以秒为单位)
* lpush key value list类型
* incr key 递增
* mset key1 value1 key2 value2 批量设置
* mget key1 key2 批量获取
* hset key field value 哈希
* hget key field 
* hmset key1 field1 value1 field2 value2  
* hexists key field 是否存在
* hexists key field value 不存在时赋值
* hdel key 删除











