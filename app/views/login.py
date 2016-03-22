from flask import Blueprint,render_template

login=Blueprint('login',__name__)


@login.route('/')
def show():
    return render_template('index.html')
