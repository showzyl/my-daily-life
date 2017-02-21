# baseline performance
# inspire by http://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2650722844&idx=3&sn=c9e5f788db0b83e0320acc50d8ab4286&chksm=871b1662b06c9f74b2770e8d1cc9f181ec5089d004cc34e578bbcbe547d25ef331010e205c25&mpshare=1&scene=23&srcid=0203qqUsRyHIDigqpnzbFque%23rd


# 1. random prediction

from random import seed
from random import randrange

def random_algorithm(train, test):
	output_values = [row[-1] for row in train]
	unique = list(set(output_values))
	predicted = list()
	for row in test:
		index = randrange(len(unique))
		predicted.append(unique[index])
	return predicted

seed(1)
train = [[0], [1], [0], [1], [0], [1]]
test = [[None], [None], [None], [None]]
predictions = random_algorithm(train, test)
print(predictions)


# 2.zero rule algorithm for classification
def zero_rule_algorithm_classification(train, test):
	output_values = [row[-1] for row in train]
	prediction = max(set(output_values), key=output_values.count)
	predicted = [prediction for i in range(len(train))]
	return predicted

seed(1)
train = [['0'], ['0'], ['0'], ['0'], ['1'], ['1']]
test = [[None], [None], [None], [None]]
predictions = zero_rule_algorithm_classification(train, test)
print(predictions)











