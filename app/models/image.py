from .db import db


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    image_url = db.Column(db.VARCHAR(300), nullable=False)
    description = db.Column(db.VARCHAR(500), nullable=False)

    users = db.relationship('User', back_populates='images')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'image_url': self.image_url,
            'description': self.description
        }
