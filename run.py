#coding:utf-8
from app import app
from wsgiref.simple_server import make_server

if __name__ == '__main__':
    app.run()
