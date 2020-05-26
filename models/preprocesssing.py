import re
import io
import csv
import emoji
import pandas as pd
from textblob import TextBlob
from nltk.corpus import stopwords 
from googletrans import Translator
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer


import re
url_finder = re.compile(r"http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+")
problemchars = re.compile(r'[\[=\+/&<>;:!\\|*^\'"\#?%$@)(_\,\.\t\r\n0-9-—\]]')
example = 'Bangalore Airport   #&  is   good in, customer       satisfaction https://twitter.com/tweets/blrairport'

# Convert text to lowercase
example=example.lower()
print(example)

# Remove URL's in the string 
example = problemchars.sub(" ", url_finder.sub("", example))
print(example)

# Remove extra space from the String
example = re.sub(" +", " ", example)
print(example)



from nltk.corpus import stopwords 
from nltk.tokenize import word_tokenize 

example_sent = "bangalore airport is one of the popular airport in india"
stop_words = set(stopwords.words('english')) 
word_tokens = word_tokenize(example_sent) 
filtered_sentence = [w for w in word_tokens if not w in stop_words] 
filtered_sentence = [] 
for w in word_tokens: 
	if w not in stop_words: 
		filtered_sentence.append(w) 

print(filtered_sentence) 


from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize
lemmatizer=WordNetLemmatizer()
input_str='In BLRAirprt the major problem is mice'
input_str=word_tokenize(input_str)
l = []
for word in input_str:
    a = lemmatizer.lemmatize(word)
    l.append(a)
print(l)


from textblob import TextBlob
input_str='an article, to write, interesting, easily, and, of'

result = TextBlob(input_str)
print(result.tags)


from googletrans import Translator
translator = Translator()
sample = 'ಬೆಂಗಳೂರು ವಿಮಾನ ನಿಲ್ದಾಣವು ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿರುವ ವಿಮಾನ ನಿಲ್ದಾಣವಾಗಿದೆ. #BIAL'

output = (translator.translate(sample)).text
print(output)


import emoji
print(emoji.demojize('Exams are near 😨'))