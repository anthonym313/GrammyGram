from .db import db


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    image_id = db.Column(db.Integer, db.ForeignKey("images.id"))
    like = db.Column(db.Boolean)

    users = db.relationship('User', backref='likes', lazy='True')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'image_id': self.image_url,
            'like': self.like
        }
