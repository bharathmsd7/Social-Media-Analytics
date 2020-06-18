import re
import app
import pandas as pd
import numpy as np
import nltk
from nltk.corpus import stopwords
stop = stopwords.words("english")
import matplotlib.pyplot as plt
import seaborn as sns
from nltk.stem.porter import PorterStemmer
from collections import Counter
import csv
import eel

data = pd.read_csv("bdata.csv")
sentiment=data['Sentiment']
emotion=data['Emotion']
date=data['Date_and_Time']
hashtags=data['Hashtags']

#cleanhashtags
clean_Text = []
initial_date=date[0].split('-')[1]
#monthly sentiment
mp=0;mn=0;mne=0
monthlycountsentiment=[]
#monthly emotion
me1=0;me2=0;me3=0;me4=0;me5=0
monthlycountemotion=[]
#total sentiment
tp=0;tn=0;tne=0
totalcountsentiment=[]
#total emotion
te1=0;te2=0;te3=0;te4=0;te5=0
totalcountemotion=[]
#totaltweetcount
totaltweetcount=0
#monthlytweetcount
mtc=0
monthlytweetcount=[]

#eel.init("web")
for i in range(len(date)):
    #To find hashtags
    t=hashtags[i][1:len(hashtags[i])-1]
    if(len(t)>0):
        t=t.split(',')
        g=''
        for hashtags[i] in t:
            g=hashtags[i][1:len(hashtags[i])-1]
            if(g[0]=="'"):
                g=g[1:]
        clean_Text.append(g.lower())

    totaltweetcount=totaltweetcount+1
    if(sentiment[i]=='positive'):
        tp=tp+1
    elif(sentiment[i]=='negative'):
        tne=tne+1
    elif(sentiment[i]=='neutral'):
        tn=tn+1
    if(emotion[i]=='sadness'):
        #print('sadness')
        te1=te1+1
    elif(emotion[i]=='joy'):
        #print('joy')
        te2=te2+1
    elif(emotion[i]=='fear'):
        #print('fear')
        te3=te3+1
    elif(emotion[i]=='disgust'):
        #print('disgust')
        te4=te4+1
    elif(emotion[i]=='anger'):
        #print('anger')
        te5=te5+1
    if(date[i].split('-')[1]==initial_date):
        mtc=mtc+1
        if(sentiment[i]=='positive'):
            mp=mp+1
        elif(sentiment[i]=='negative'):
            mne=mne+1
        elif(sentiment[i]=='neutral'):
            mn=mn+1
        if(emotion[i]=='sadness'):
            #print('sadness')
            me1=me1+1
        elif(emotion[i]=='joy'):
            #print('joy')
            me2=me2+1
        elif(emotion[i]=='fear'):
            #print('fear')
            me3=me3+1
        elif(emotion[i]=='disgust'):
            #print('disgust')
            me4=me4+1
        elif(emotion[i]=='anger'):
            #print('anger')
            me5=me5+1
    else:
        monthlycountsentiment.append([mp,mne,mn])
        monthlycountemotion.append([me1,me2,me3,me4,me5])
        monthlytweetcount.append(mtc)
        mtc=0
        mp=0;mne=0;mn=0
        me1=0;me2=0;me3=0;me4=0;me5=0
        initial_date=date[i].split('-')[1]
        if(date[i].split('-')[1]==initial_date):
            mtc=0
            if(sentiment[i]=='positive'):
                mp=mp+1
            elif(sentiment[i]=='negative'):
                mne=mne+1
            elif(sentiment[i]=='neutral'):
                mn=mn+1
            if(emotion[i]=='sadness'):
                #print('sadness')
                me1=me1+1
            elif(emotion[i]=='joy'):
                #print('joy')
                me2=me2+1
            elif(emotion[i]=='fear'):
                #print('fear')
                me3=me3+1
            elif(emotion[i]=='disgust'):
                #print('disgust')
                me4=me4+1
            elif(emotion[i]=='anger'):
                #print('anger')
                me5=me5+1

Counter=Counter(clean_Text)
most_occur=Counter.most_common(5)
hashtags=[]
hashtagscount=[]
l=''
totalhashtagscount=0
for i in most_occur:
    print(i)
    l=l+i[0]+' '
    hashtags.append(i[0])
    hashtagscount.append(i[1])
    totalhashtagscount=totalhashtagscount+i[1]

hashtagspercent=[]
hashtagspercent.append((most_occur[0][1]*100)/totalhashtagscount)
hashtagspercent.append((most_occur[1][1]*100)/totalhashtagscount)
hashtagspercent.append((most_occur[2][1]*100)/totalhashtagscount)
hashtagspercent.append((most_occur[3][1]*100)/totalhashtagscount)
hashtagspercent.append((most_occur[4][1]*100)/totalhashtagscount)

totalcountsentiment.append(tp)
totalcountsentiment.append(tne)
totalcountsentiment.append(tn)
totalcountemotion.append(te1)
totalcountemotion.append(te2)
totalcountemotion.append(te3)
totalcountemotion.append(te4)
totalcountemotion.append(te5)

eel.getmonthlycountsentiment(monthlycountsentiment)
eel.getmonthlycountemotion(monthlycountemotion)
eel.gettotalcountsentiment(totalcountsentiment)
eel.gettotalcountemotion(totalcountemotion)
eel.gettotaltweetcount(totaltweetcount)
eel.getmonthlytweetcount(monthlytweetcount)
eel.gethashtagspercent(hashtagspercent)
eel.gethashtags(hashtags)
eel.gethashtagscount(hashtagscount)
#eel.getResult(monthlycountsentiment)
eel.start("index.html", size=(800, 600))
