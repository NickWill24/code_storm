from models.db import db
from datetime import datetime

class Idea(db.Model):
    __tablename__='ideas'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    stacks = db.Column(db.String(255))
    description = db.Column(db.String(225))
    number_of_like = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False, onupdate=datetime.now())

    def __init__(self, title, stacks, description, number_of_like):
        self.title= title
        self.stacks= stacks
        self.description= description
        self.number_of_like= number_of_like


    def json(self):
        return {"id": self.id,
                "title": self.title,
                "stacks":self.stacks,
                "description": self.description,
                "number_of_like": self.number_of_like,
                "created_at": str(self.created_at),
                "updated_at": str(self.updated_at)}


    def create(self):
        db.session.add(self)
        db.session.commit()
        return self


    @classmethod
    def find_all(cls):
        return Idea.query.all()


    @classmethod
    def find_by_id(cls, id):
        return Idea.query.filter_by(id=id).first()