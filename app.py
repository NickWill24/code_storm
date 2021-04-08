from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from models.idea import Idea
from resources.idea import Ideas, SingleIdea
app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://localhost:5432/code_storm"
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app,db)

api.add_resource(Ideas, '/ideas')
api.add_resource(SingleIdea, '/ideas/<int:id>')


if __name__ == '__main__':
    app.run(debug=True)