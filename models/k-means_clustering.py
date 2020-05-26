import numpy as np
import pandas as pd 
import re
from sklearn.cluster import MiniBatchKMeans
from sklearn.feature_extraction.text import TfidfVectorizer

text = pd.read_csv("../input/datasetfortopics/topic.csv")
text.head()


text_content = text['Text']

url_finder = re.compile(r"http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+")
problemchars = re.compile(r'[\[=\+/&<>;:!\\|*^\'"\?%$@)(_\,\.\t\r\n0-9-—\]]')

l = ['bangalore', 'blrairport', 'kempegowda', 'bengaluru', '']

for i in text_content:
    i = i.lower()
    i = problemchars.sub(" ", url_finder.sub("", i))
    k=i.split()
    g=''
    for j in k:
        if j not in l:
            g=g+j+" "
    i=g
    print(i)


