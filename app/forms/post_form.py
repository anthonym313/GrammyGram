from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired
# from app.models import User


class PostForm(FlaskForm):
    image_url = StringField('image_url', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
