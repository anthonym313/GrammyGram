from flask import Blueprint, jsonify, session, request
from app.models import db, Image
from app.forms import PostForm
from flask_login import current_user, login_user, logout_user, login_required

post_routes = Blueprint('post', __name__)


@post_routes.route('/post', methods=['GET', 'POST'])
def index():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        image = Image(
            image_url=form.data['img_url'],
            description=form.data['description']
        )
        db.session.add(image)
        db.session.commit()
        return image.to_dict()
