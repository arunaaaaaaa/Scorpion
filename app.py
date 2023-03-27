'''from flask import Flask, render_template, request, redirect, url_for
from flask_mysqldb import MySQL
from colorama import Fore, Back, Style
import pymysql


app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Ajaypranav99'
app.config['MYSQL_DB'] = 'software'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

text = "Latest News Headline"
centered_text = text.center(30)
print(centered_text)

@app.route('/')
def home():
  return '<a href="/home">WELCOME</a>'

@app.route('/home', methods=['GET'])
def html_page():
  with open('D:/Njit/Software/templates/home.html', 'r') as file:
    a = file.read()
  return a 

@app.route('/signin', methods=['GET','POST'])
def sign_in():
    return render_template('signin.html')

@app.route('/signin', methods=['GET'])
def html_page():
  with open('D:/Njit/Software/templates/signin.html', 'r') as file:
    a = file.read()
  return a '''


'''@app.route('/signup')
def sign_up():
    return render_template('signup.html')

if __name__ == '__main__':
	app.run(debug=True)
#D:/Njit/Software/templates/login.html '''

from flask import Flask, render_template, request, redirect, url_for
from flask_mysqldb import MySQL
from colorama import Fore, Back, Style
import pymysql

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Ajaypranav99'
app.config['MYSQL_DB'] = 'software'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/')
def home():
    return '<a href="/home">WELCOME</a>'

@app.route('/signin', methods=['GET','POST'])
def sign_in():
    if request.method == 'POST':
        # Handle sign in form submission
        Username = request.form['Username']
        Passwrd = request.form['Passwrd']

        # Verify username and password against database
        # ...

        return redirect(url_for('home'))
    else:
        # Display sign in form
        return render_template('signin.html')

@app.route('/signup', methods=['GET','POST'])
def sign_up():
    if request.method == 'POST':
        # Handle sign up form submission
        username = request.form['username']
        password = request.form['password']

        # Insert username and password into database
        # ...

        return redirect(url_for('home'))
    else:
        # Display sign up form
        return render_template('signup.html')

if __name__ == '__main__':
    app.run(debug=True)
