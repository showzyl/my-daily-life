# -*- coding:utf8 -*-

###  http://scikit-learn.org/stable/modules/svm.html

from sklearn import svm

X = [[0, 0], [1, 1]]
y = [0, 1]
clf = svm.SVC(kernel='linear')
clf.fit(X, y)

print clf.predict([[1., 2.]])


