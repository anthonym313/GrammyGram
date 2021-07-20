from flask import Blueprint
from random import randint
from flask_login import login_required
from app.models import User

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
    return user.to_dict()

@user_routes.route('/random')
@login_required
def random_user():
    all_users = User.query.all()
    userlist=[]
    i = 0
    while i < 5:
        user = User.query.get(randint(0,len(all_users)))
        userlist.append(user)
        i += 1
    return userlist
        
    # random_users = User.query.order_by(func.random()).limit(5).all()
    # return {'randomUsers': {random_users}}
