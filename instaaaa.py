import instagram_scraper as insta
scraper = insta.InstagramScraper( hashtag = 'bangaloreairport',  maximum = 200, quiet=False, tag=True )                              
a=scraper.scrape_hashtag()
print(a)
