#coding:utf-8
from flask import Flask
from views.login import login
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__,instance_relative_config=True)
app.config.from_pyfile('config.py')

login=app.register_blueprint(login,url_prefix='/login')

db = SQLAlchemy(app)
