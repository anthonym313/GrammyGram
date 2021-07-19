from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import PostForm
from flask_login import current_user, login_user, logout_user, login_required

post_routes = Blueprint('post', __name__)

@post_routes.route('', methods=['GET', 'POST'])
def index():
    form = PostForm()
    