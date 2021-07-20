from flask import Blueprint, jsonify, session, request
from app.models import db, Image
from app.forms import PostForm
from flask_login import current_user

post_routes = Blueprint('post', __name__)


@post_routes.route('', methods=['POST'])
def index():

    req = request.get_json()

    image = Image(
        image_url=req['image_url'],
        description=req['description'],
        user_id=current_user.id
    )

    db.session.add(image)
    db.session.commit()
    return image.to_dict()


# @post_routes.route('/<int:id>', methods=['GET'])
