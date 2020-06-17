from textblob import TextBlob
import io
import pandas as pd
import csv

data = pd.read_csv('v.csv')
r = data['tweet']
li = []

for i in r:
    testimonial = TextBlob(str(i))
    senti=testimonial.sentiment.polarity
    if(senti==0.0):
        sen='neutral'
    elif(senti>0.0):
       sen='positive'
    elif(senti<0.0):
        sen='negative'
    dictionary={
        'T': i,
        's':sen
    }
    li.append(dictionary)
with io.open("6months.csv","w",encoding = "utf-8")as csvfile:
    w = csv.writer(csvfile,lineterminator="\n",delimiter=",",quotechar='"')

    header = ["tweet","sentiment"]
    w.writerow(header)
    for i in li:
        try:
            if len(i["T"]) > 0:
                newrow = (
                    i["T"],
                    i["s"]
                )
                w.writerow(newrow)
            else:
                pass
        except:
            pass