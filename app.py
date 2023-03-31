from flask import Flask
from flask import render_template
import json
import random


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/score/')
@app.route('/score/<int:time>')
def score(time=0):
    return render_template('score.html', time=time)

@app.route('/quiz/')
def quiz():
    order = []
    for i in range(30):
        order.append('/3s/' + str(i).zfill(3) + '.jpg')
        order.append('/bees/' + str(i).zfill(3) + '.jpg')
    random.shuffle(order)
    return render_template('quiz.html', order=json.dumps(order))
