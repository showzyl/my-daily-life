### mongo study

* show dbs 显示所有db
* use lizi 创建or使用数据库
* db.lizi.insert({"测试数据":"123"}) 插入一条数据
* db.dropDatabase() 删除数据库
* db.collection.drop() 删除集合
* show collections 显示当前集合
* db.serverStatus() 查看数据库服务器的状态
* db.stats() 查询指定数据库统计信息
* db.getCollectionNames() 获取所有集合
* db.lizi.findOne() 查一条
* db.lizi.find() 查所有
* db.lizi.count() 统计有几条
* db.lizi.update({"l": 123}, {"l": '456'}, {multi:true}) 更新数据 multi是true则更新多行
* db.lizi.remove({"l": 123}, 1) 删除数据 不要第二个参数都删除
* db.lizi.find({likes : {$lt :200, $gt : 100}}) 大于100 小于200
* db.col.find({"title" : {$type : 2}}) $type 字段的数据类型
* db.col.find().limit(numbers)  限制查找的数量
* db.col.find().limit(numbers).skip(numbers)  跳过
* db.col.find().sort({KEY:1})  排序
* db.col.ensureIndex({"title":1})  索引
* db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}]) 聚合
* db.currentOp() 




[inspired by mongodb](http://www.runoob.com/mongodb/)
[inspired by 索引探索](http://www.jianshu.com/p/3483918ce28c)











