from flask_wtf import FlaskForm
from wtforms import StringField, TextField,
from wtforms.validators import DataRequired, Email, ValidationError
# from app.models import User


class PostForm(FlaskForm):
    img_url = StringField('Image Url', validators=[DataRequired()])
    description = TextField('Description', validators=[DataRequired()])
