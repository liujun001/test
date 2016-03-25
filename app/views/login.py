from flask import Blueprint,render_template
from ..models import Engine
login=Blueprint('login',__name__)


@login.route('/')
def show():
    return render_template('index.html')
