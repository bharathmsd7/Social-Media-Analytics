from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import time
import csv
import io
import datetime
from win10toast import ToastNotifier
import json

def get_url(data):
    print(data)

    global hashtag
    hashtag = data
    if(hashtag[0]=='#'):
        hashtag=hashtag[1:]

    # Windows Toast Notification
    notification = "Your search for #" + hashtag + " is being processed..."
    toaster = ToastNotifier()
    toaster.show_toast(
        "Social media analyser", notification, duration=5, icon_path="web/img/logo.ico"
    )

    date = "2019-1-31"
    date2 = "2019-1-1"
    # Url to be searched
    url = ( 
        "https://twitter.com/search?q="
        + hashtag
        + "%20until%3A"
        + date
        +"%20since%3A"
        +date2
        + "&src=typed_query"
    )

    browser = webdriver.Chrome("C:/chromedriver")
    browser.maximize_window()

    # opening the url in browser
    browser.get(url)

    # Get scroll height
    last_height = browser.execute_script("return document.body.scrollHeight")

    while True:
        # tells the browser to scroll down the page
        browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")

        # define how many seconds to wait while dynamic page content loads
        time.sleep(3)

        new_height = browser.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            break
        last_height = new_height

    # parsing the page html using Beatiful soup
    html = browser.page_source
    #browser.quit()
    # sending the html page to scrapper function
    scrapper(html)

# function for web scrapping
def scrapper(html):

    k =0
    # regular expression for text clearing
    url_finder = re.compile(
        r"http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+"
    )
    problemchars = re.compile(r'[\[=\+/&<>;:!\\|*^\'"\?%$@)(_\,\.\t\r\n0-9-—\]]')

    tweet_list = []

    # call dynamic page scroll function here
    soup = BeautifulSoup(html, "html.parser")
    
    for i in soup.find_all("li", {"data-item-type": "tweet"}):
        username = i.small.a["href"] if i.small is not None else ""
        tweet_id = i.small.a["data-conversation-id"] if i.small is not None else ""
        date = i.small.a["title"] if i.small is not None else ""
        text = i.p.get_text().replace("\n", "") if i.p is not None else ""
        likes_count = i.find("span", "ProfileTweet-action--favorite u-hiddenVisually").find("span")["data-tweet-stat-count"]
        replies_count = i.find("span", "ProfileTweet-action--reply u-hiddenVisually").find("span")["data-tweet-stat-count"]
        retweet_count = i.find("span", "ProfileTweet-action--retweet u-hiddenVisually").find("span")["data-tweet-stat-count"]
        hashtags = [hashtag.text for hashtag in i.find_all("a","twitter-hashtag")]
        photos = [photo_node.attrs['data-image-url'] for photo_node in i.find_all("div", "AdaptiveMedia-photoContainer")]
        
        username = username[1:].split("/")[0]

        # Removing the Tweets of BLRAiport
        if username == "BLRAirport":
            continue
        
        tweet = problemchars.sub(" ", url_finder.sub("", text))

        
        if('Retweeted' in tweet):
            continue
        # Remove extra space from the String
        tweet = re.sub(" +", " ", tweet)

        # Remove picture data from the String
        if "twitter com" in tweet:
            tweet = tweet[: tweet.index("twitter com")]
            # print(tweet)

        if('pic ' in tweet[len(tweet)-5:]):
            tweet = tweet[:len(tweet)-5]
            #print(tweet)

        # Removing the emoji from the tweet
        #emoji_removed = emoji.demojize(tweet)

        # Translating any language tweet to english (using googletrans)
        #translator = Translator()
        #tweet = (translator.translate(emoji_removed)).text
        print(tweet)
        
    #eel.result(sadness, joy, fear, disgust, anger, positivescore, negativescore, neutralscore, totalscore)

        # Build dictionary to format data as key-pair value
        tweet_data = {
            "_id": k,
            "_tweet_id": tweet_id,
            "_uname": username,
            "_date": date,
            "_tweet_text": tweet,
            "_likes_count": likes_count,
            "_retweet_count": retweet_count,                                                                    
            "_replies_count": replies_count,
            "_hashtags": hashtags,
            "_photos": photos,
           
        }

        # Appending the Dictnory into the list
        tweet_list.append(tweet_data)
        # setting up the next _id value in dictnory
        k = k + 1
    csvWritter(tweet_list)

# Function to write CSV file
def csvWritter(tweet_list):
    file_name ="jantest.csv"

    with io.open(file_name, "w", encoding="utf-8") as csvfile:
        writer = csv.writer(csvfile, lineterminator="\n", delimiter=",", quotechar='"')

        # Assigning the header in CSV
        header = ["Username", "Tweet_id", "Date_and_Time", "Tweet_text","Likes_Count","Retweet_Count","Replies_Count","Hashtags","Photos"]

        # write header row to spreadsheet
        writer.writerow(header)
        print(len(tweet_list))
        for i in tweet_list:
            if len(i["_tweet_text"]) > 0:
                newrow = (
                    i["_uname"],
                    i["_tweet_id"],
                    i["_date"],
                    i["_tweet_text"],
                    i["_likes_count"],
                    i["_retweet_count"],
                    i["_replies_count"],
                    i["_hashtags"],
                    i["_photos"]
                )
                writer.writerow(newrow)
            else:
                pass

get_url('kempegowda airport')
#get_url('Blr airport')
#get_url('Bangalore airport')
#get_url('bengaluru airport')