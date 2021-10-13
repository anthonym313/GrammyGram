from flask import Blueprint, request, jsonify
from app.models import db, Like
from flask_login import current_user, login_required

like_routes = Blueprint('likes', __name__)


# GET LIKES


@like_routes.route('/<int:image_id>/likes')
def all_likes_image(image_id):
    allLikes = Like.query.filter(
        Like.image_id == image_id).all()
    return jsonify([likeObj.to_dict() for likeObj in allLikes
                    if likeObj.like is True])

# GET DISLIKES


@ like_routes.route('/<int:image_id>/dislikes')
def all_dislikes_image(image_id):
    allLikes = Like.query.filter(
        Like.image_id == image_id).all()
    return jsonify([likeObj.to_dict() for likeObj in allLikes
                    if likeObj.like is False])

# POST


@like_routes.route('/create', methods=['POST'])
@login_required
def post_like():
    req = request.get_json()
    newLike = Like(
        user_id=current_user.id,
        image_id=req['image_id'],
        like=req['like']
    )
    db.session.add(newLike)
    db.session.commit()
    return newLike.to_dict()


@like_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_like(id):
    deleteLike = Like.query.get(id)
    # print('deleted like ######', deleteLike.user_id)
    if (deleteLike.user_id == current_user.id):
        db.session.delete(deleteLike)
        db.session.commit()
    return {'message': 'Like Deleted'}
