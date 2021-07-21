from app.models import db,Image
#Adds a image, you can add other images here if you want
def seed_images():
    photo1= Image(
        user_id ='',image_url = '', description=''
    )
    photo2= Image(
        user_id ='',image_url = '', description=''
    )
    photo3= Image(
        user_id ='',image_url = '', description=''
    )
    photo4= Image(
        user_id ='',image_url = '', description=''
    )
    photo5= Image(
        user_id ='',image_url = '', description=''
    )
    photo6= Image(
        user_id ='',image_url = '', description=''
    )
    photo7= Image(
        user_id ='',image_url = '', description=''
    )
    photo8= Image(
        user_id ='',image_url = '', description=''
    )
    photo9= Image(
        user_id ='',image_url = '', description=''
    )
    photo10= Image(
        user_id ='',image_url = '', description=''
    )
    photo11= Image(
        user_id ='',image_url = '', description=''
    )
    photo12= Image(
        user_id ='',image_url = '', description=''
    )
    photo13= Image(
        user_id ='',image_url = '', description=''
    )
    photo14= Image(
        user_id ='',image_url = '', description=''
    )
    photo15= Image(
        user_id ='',image_url = '', description=''
    )
    photo16= Image(
        user_id ='',image_url = '', description=''
    )
    photo17= Image(
        user_id ='',image_url = '', description=''
    )
    photo18= Image(
        user_id ='',image_url = '', description=''
    )
    photo19= Image(
        user_id ='',image_url = '', description=''
    )
    photo20= Image(
        user_id ='',image_url = '', description=''
    )
    photo21= Image(
        user_id ='',image_url = '', description=''
    )
    photo22= Image(
        user_id ='',image_url = '', description=''
    )
    photo23= Image(
        user_id ='',image_url = '', description=''
    )
    photo24= Image(
        user_id ='',image_url = '', description=''
    )
    photo25= Image(
        user_id ='',image_url = '', description=''
    )
    photo26= Image(
        user_id ='',image_url = '', description=''
    )
    photo27= Image(
        user_id ='',image_url = '', description=''
    )
    photo28= Image(
        user_id ='',image_url = '', description=''
    )
    photo29= Image(
        user_id ='',image_url = '', description=''
    )
    photo30= Image(
        user_id ='',image_url = '', description=''
    )
    photo31= Image(
        user_id ='',image_url = '', description=''
    )
    photo32= Image(
        user_id ='',image_url = '', description=''
    )
    photo33= Image(
        user_id ='',image_url = '', description=''
    )
    photo34= Image(
        user_id ='',image_url = '', description=''
    )
    photo35= Image(
        user_id ='',image_url = '', description=''
    )
    photo36= Image(
        user_id ='',image_url = '', description=''
    )
    photo37= Image(
        user_id ='',image_url = '', description=''
    )
    photo38= Image(
        user_id ='',image_url = '', description=''
    )
    photo39= Image(
        user_id ='',image_url = '', description=''
    )
    photo40= Image(
        user_id ='',image_url = '', description=''
    )
    photo41= Image(
        user_id ='',image_url = '', description=''
    )
    photo42= Image(
        user_id ='',image_url = '', description=''
    )
    photo43= Image(
        user_id ='',image_url = '', description=''
    )
    photo44= Image(
        user_id ='',image_url = '', description=''
    )
    photo45= Image(
        user_id ='',image_url = '', description=''
    )
    photo46= Image(
        user_id ='',image_url = '', description=''
    )
    photo47= Image(
        user_id ='',image_url = '', description=''
    )
    photo48= Image(
        user_id ='',image_url = '', description=''
    )
    photo49= Image(
        user_id ='',image_url = '', description=''
    )
    
    db.session.add()
    db.session.commit()
    
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()