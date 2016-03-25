#coding:utf-8
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__,instance_relative_config=True)
app.config.from_pyfile('config.py')
db = SQLAlchemy(app)

from views.login import login#注意导入顺序
login=app.register_blueprint(login,url_prefix='/login')
