import csv
import spacy
from spacy import displacy
from collections import Counter
import en_core_web_sm
nlp = en_core_web_sm.load()

t='KFC in Bangalore airport is the most overated shop.'
doc = nlp(t)
g=[(X.text, X.label_) for X in doc.ents]

print(g)