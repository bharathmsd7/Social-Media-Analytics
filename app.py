import webbrowser
import os
new = 2

Root = os.path.dirname(os.path.abspath(__file__))    
url = 'file://' + Root + '/web/index.html'
print(url)
webbrowser.open(url, new=new)

