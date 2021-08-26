from flask import Blueprint, jsonify
from sqlalchemy.sql.expression import func
from random import randint
from flask_login import login_required
from app.models import User, Image

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return jsonify([user.to_dict()])


@user_routes.route('/random')
@login_required
def random_user():
    random_users = User.query.order_by(func.random()).limit(6).all()
    return jsonify([user.to_dict() for user in random_users])




@user_routes.route('/smallgroup')
@login_required
def smallgroup_user():
    smallgroup_users = User.query.order_by(func.random()).limit(4).all()
    return jsonify([user.to_dict() for user in smallgroup_users])
