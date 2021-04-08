from flask_restful import Resource
from flask import request
from models.idea import Idea
from models.db import db


class Ideas(Resource):
    def get(self):
        data = Idea.find_all()
        results = [u.json() for u in data]
        return results

    def post(self):
        data = request.get_json()
        idea= Idea(**data)
        idea.create()
        return idea.json(),201


class SingleIdea(Resource):
    def get(self, id):
            idea= Idea.find_by_id(id)
            return idea.json()

    def delete(self, id):
        idea = Idea.find_by_id(id)
        db.session.delete(idea)
        db.session.commit()
        return{"msg": 'Idea deleted', 'payload': idea.id}

    # def put(self, id):
    #     idea = Idea.find_by_id(id)
    #     data = request.get_json()
    #     for key in data:
    #         setattr(idea,key,data[key])
    #     db.session.commit()
    #     return idea.json()