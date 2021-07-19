from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Like(db.Model):
    __tablename__ = 'likes'

    user_id = db.Column(db.Integer)
    image_id = db.Column(db.Integer)
    like = db.Column(db.Boolean)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'image_url': self.image_url,
            'description': self.description
        }
