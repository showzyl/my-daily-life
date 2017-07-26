#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Created by showzyl on 2017/7/4



# measurements = [
#     {'city': 'Dubai', 'temperature': 33.},
#     {'city': 'London', 'temperature': 12.},
#     {'city': 'San Fransisco', 'temperature': 18.},
# ]
#
# from sklearn.feature_extraction import DictVectorizer
# vec = DictVectorizer()
#
# print vec.fit_transform(measurements).toarray()
#
# print vec.get_feature_names()





from sklearn.feature_extraction.text import CountVectorizer
vectorizer = CountVectorizer()
string1 = 'hi Katie the self driving car will be late Best Sebastian'
string2 = 'Hi Sebastian the machine learing class will be great great great best Katie'
string3 = 'hi Katie the machine learing class will be most excellent'
list = [string1, string2, string3]
bag_of_world = vectorizer.fit(list)
bag_of_world = vectorizer.transform(list)
print bag_of_world



#
# from nltk.corpus import stopwords

# from nltk.stem.snowball import SnowballStemmer
# stemmer = SnowballStemmer("english")






if __name__ == '__main__':
    pass

