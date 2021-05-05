from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from models.idea import Idea
from resources.idea import Ideas, SingleIdea
from flask_cors import CORS
import os
app = Flask(__name__)
cors = CORS(app)
api = Api(app)

DATABASE_URL = os.getenv('DATABASE_URL')
if DATABASE_URL:
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL.replace(
        "://", "ql://", 1)
    app.config['SQLALCHEMY_ECHO'] = False
    app.env = 'production'
else:
    app.debug = True
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/code_storm'
    app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app,db)



api.add_resource(Ideas, '/ideas')
api.add_resource(SingleIdea, '/ideas/<int:id>')


if __name__ == '__main__':
    app.run()