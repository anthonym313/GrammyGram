from flask import Blueprint, jsonify, session, request
from app.models import db, Image
from app.forms import PostForm
from flask_login import current_user

post_routes = Blueprint('post', __name__)


@post_routes.route('', methods=['POST'])
def index():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    image = Image(
        image_url='5',
        description=form.data['description'],
        user_id = current_user.id
    )
    db.session.add(image)
    db.session.commit()
    return image.to_dict()
    # return jsonify({'error': 'Invalid request'})
