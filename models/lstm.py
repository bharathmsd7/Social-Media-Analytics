import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.models import Sequential
from keras.layers import Dense, Embedding, LSTM, SpatialDropout1D
from sklearn.model_selection import train_test_split
from keras.utils.np_utils import to_categorical
import re
import pickle
import pandas as pd


data = pd.read_csv("../input/sentimentdata1/Sentimentdata.csv")
print('Successfully imported the dataset')

data = data[['tweet','sentiment']]
data['text'] = data['tweet'].apply(lambda x: x.lower())
data['text'] = data['tweet'].apply((lambda x: re.sub('[^a-zA-z0-9\s]','',x)))
max_fatures = 2000
tokenizer = Tokenizer(num_words=max_fatures, split=' ')
tokenizer.fit_on_texts(data['text'].values)

# Load from file
with open('../input/lstmmodel/lstm_model.pkl', 'rb') as file:
    model = pickle.load(file)

batch_size=64

score,acc = model.evaluate(X_val, Y_val, verbose = 2, batch_size = batch_size)
print("score: %.2f" % (score))
print("acc: %.2f" % (acc))

twt = ['The bangalore airport is good but the way to the airport is bad']
#vectorizing the tweet by the pre-fitted tokenizer instance
twt = tokenizer.texts_to_sequences(twt)
print('token')
print(twt)
#padding the tweet to have exactly the same shape as `embedding_2` input
twt = pad_sequences(twt, maxlen=61, dtype='int32', value=0)
print(twt)
sentiment = model.predict(twt,batch_size=1,verbose = 2)[0]
if(np.argmax(sentiment) == 0):
    print("negative")
elif (np.argmax(sentiment) == 1):
    print("positive")
elif (np.argmax(sentiment) == 2):
    print("neutral")


