import io
import csv
import pandas as pd
import numpy as np
import json
from datetime import datetime, timedelta

'''
#Extract date and convert jan to 01
r = csv.reader(open('bangaloref.csv', encoding="utf-8")) # Here your csv file
lines = list(r)

for i in range(len(lines)):
    if(i==0):
        continue
    datelist=lines[i][2].split()[3:]
    if(datelist[1]=='Jan'):
        datelist[1]='01'
    elif(datelist[1]=='Feb'):
        datelist[1]='02'
    elif(datelist[1]=='Mar'):
        datelist[1]='03'
    elif(datelist[1]=='Apr'):
        datelist[1]='04'
    elif(datelist[1]=='May'):
        datelist[1]='05'
    elif(datelist[1]=='Jun'):
        datelist[1]='06'
    elif(datelist[1]=='Jul'):
        datelist[1]='07'
    elif(datelist[1]=='Aug'):
        datelist[1]='08'
    elif(datelist[1]=='Sep'):
        datelist[1]='09'
    elif(datelist[1]=='Oct'):
        datelist[1]='10'
    elif(datelist[1]=='Nov'):
        datelist[1]='11'
    elif(datelist[1]=='Dec'):
        datelist[1]='12'
    lines[i][2]='-'.join(datelist)
    print(lines[i][2])

writer = csv.writer(open('output2.csv', 'w',encoding="utf-8"))
writer.writerows(lines)

#delete a extra line in csv
with open('output2.csv',encoding="utf-8") as in_file:
    with open('output3.csv', 'w',encoding="utf-8") as out_file:
        writer = csv.writer(out_file, lineterminator="\n", delimiter=",", quotechar='"')
        for row in csv.reader(in_file):
            if (len(row)>0):
                print(len(row))
                writer.writerow(row)
            else:
                pass





'''
#code to create a new csv file and write the row
with io.open('output4.csv', "w", encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile, lineterminator="\n",
                        delimiter=",", quotechar='"')

    # Assigning the header in CSV
    header = ["Username", "Tweet_id", "Date_and_Time", "Tweet_text", "Likes_Count",
              "Retweet_Count", "Replies_Count", "Hashtags", "Photos", "Sentiment", "Emotion"]

    # write header row to spreadsheet
    writer.writerow(header)
    with open('output3.csv', encoding="utf8") as csv_data:
        reader = csv.reader(csv_data,  delimiter=',')
        next(csv_data)  # if you want to skip first line

    # sorting with date
        days_sorted = sorted(reader, key=lambda day: datetime.strptime(
            day[2], "%d-%m-%Y"), reverse=False)
        for i in days_sorted:
            writer.writerow(i)
        print(days_sorted)
        #print('\n')

