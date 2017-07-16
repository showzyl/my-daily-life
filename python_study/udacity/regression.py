#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Created by showzyl on 2017/7/1

### http://scikit-learn.org/stable/modules/linear_model.html#ordinary-least-squares

x = [[0, 0], [1, 1], [2, 2]]
y = [0, 1, 2]

from sklearn import linear_model
reg = linear_model.LinearRegression()
reg.fit(x, y)

# print 'slope: ', reg.coef_
# print 'intercept: ', reg.intercept_

### stats
print 'r-squared score: ', reg.score(x, y)


### draw picture
# plt.plot(ages, reg.predict(ages), color='blue', linewidth=3)












if __name__ == '__main__':
    pass

