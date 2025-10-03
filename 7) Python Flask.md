### About
Lightweight web framework for Python
Referred to as a "micro" framework

Strength:
- Highly extensible: Add what is needed
- Jinja2 template engine for dynamic HTML rendering
- Simplifies testing and dev

### Installation
```cmd
pip install flask
python -m flask --version
```

### First app
```Python
from flask import Flask
app = Flask(__name__) # Create Flask application project

@app.route('/') # Define route
def hello_world(): # Function to handle request and return response
	return 'Hello, Flask!'
	
if __name__ = '__main__'
	app.run(debug=True) # Starts the development server with debugging enabled
```
```cmd
python app.py
# The web server will run at localhost:5000
```

### About routing
The process of mapping URLs to specific code function
Every route is associated with a URL (`yourhost/whatever`) and function (`def hello_world()`)
- Flask uses decorator `@app.route()` to define routes

There is Static Route
```Python
@app.route('/about)
def about:
	return 'This is About page.'
```
or Dynamic Route
```Python
@app.route('/user/<name>')
def user(name):
	return f'Hello, {name}'
```

Let's go over route method (GET and POST)
GET:
- Used to request data from server
- E.g: Search Engine, forms
POST:
- User to send data to the server
- E.g: Form submissions
- data being sent is not visible in the URL