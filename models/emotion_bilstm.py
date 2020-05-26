import pandas as pd
data = pd.read_csv("../input/emotiontrainingdata.csv")

print('Successfully imported the dataset')

import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.models import Sequential
from keras.layers import Dense, SpatialDropout1D, Embedding, LSTM, Bidirectional
from sklearn.model_selection import train_test_split
from keras.utils.np_utils import to_categorical
import re


data = data[['tweet','Emotion']]
data.Emotion.value_counts()


data = data[['tweet','Emotion']]

data['text'] = data['tweet'].apply(lambda x: x.lower())
data['text'] = data['tweet'].apply((lambda x: re.sub('[^a-zA-z0-9\s]','',x)))


max_fatures = 2000
tokenizer = Tokenizer(num_words=max_fatures, split=' ')
tokenizer.fit_on_texts(data['text'].values)
X = tokenizer.texts_to_sequences(data['text'].values)
X = pad_sequences(X)

embed_dim = 128
lstm_out = 196

model = Sequential()
model.add(Embedding(max_fatures, embed_dim,input_length = X.shape[1]))
model.add(SpatialDropout1D(0.4))
model.add(Bidirectional(LSTM(lstm_out, dropout=0.2, recurrent_dropout=0.2)))
model.add(Dense(6,activation='softmax'))
model.compile(loss = 'categorical_crossentropy', optimizer='adam',metrics = ['accuracy'])
print(model.summary())

Y = pd.get_dummies(data['Emotion']).values
X_train, X_test, Y_train, Y_test = train_test_split(X,Y, test_size = 0.33, random_state = 42)
X_train, Y_train = X,Y
print(X_train.shape,Y_train.shape)
print(X_test.shape,Y_test.shape)

batch_size = 64
model.fit(X_train, Y_train, epochs = 8, batch_size=batch_size, verbose = 1)

validation_size = 2500

X_validate = X_test[-validation_size:]
Y_validate = Y_test[-validation_size:]
X_test = X_test[:-validation_size]
Y_test = Y_test[:-validation_size]
score,acc = model.evaluate(X_test, Y_test, verbose = 2, batch_size = batch_size)
print("score: %.2f" % (score))
print("acc: %.2f" % (acc))

