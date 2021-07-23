from app.models import db,Image
#Adds a image, you can add other images here if you want
def seed_images():
    photo1= Image(
        user_id = 8,image_url = 'https://novostiplus.info/wp-content/uploads/2021/06/Reperka-uplatila-8000-dolara-za-sahranu-svog-obozavatelja.jpg', description='Megan Thee Stallion won three Grammys at the 63rd Grammy Awards'
    )
    photo2= Image(
        user_id = 4,image_url = 'https://file1.grazia.fr/var/grazia/storage/images/1/2/7/0/7/12707918/pourquoi-look-sculptural-beyonce-fait-sensation-ceremonie-des-grammy-awards-2021.jpeg?alias=original', description='Beyonce, left, and Megan Thee Stallion accept the award for rap/sung performance for “Savage” at the 63rd Grammy Awards outside Staples Center.'
    )
    photo3= Image(
        user_id = 11,image_url = 'https://i.wpimg.pl/4000x0/filerepo.grupawp.pl/api/v1/display/embed/e8b40a3d-8ce0-46f5-b3a5-7b86dc65206a', description='Dua Lipa holds her Grammy for pop vocal album, for “Future Nostalgia.”'
    )
    photo4= Image(
        user_id = 16,image_url = 'https://www.lifo.gr/sites/default/files/styles/lifo_lightbox_open/public/articles/2021-03-15/grammy_2021.jpg?itok=QIPPMnKs', description='H.E.R. won two Grammys, for song of the year and r and b song'
    )
    photo5= Image(
        user_id = 7,image_url = 'https://cdn.kme.si/public/images-cache/806xX/2021/03/15/e6d577411ec768b1a4b06ad451f3583d/607bcdbc7291c/e6d577411ec768b1a4b06ad451f3583d.jpeg', description='With this Grammy for album of the year, Taylor Swift becomes the first female three-time winner in that category'
    )
    photo6= Image(
        user_id = 6,image_url = 'https://s.yimg.com/ny/api/res/1.2/7W3sXfUW2xT6pbnazGDwTg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY5MS4y/https://s.yimg.com/uu/api/res/1.2/eETw_OQgEyWjJO2uwtcZpg--~B/aD0xMDgwO3c9MTUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/la_times_articles_853/92295b3e82b25e1f68ec9102953faa61', description='Finneas and Billie Eilish hold two Grammys apiece'
    )
    photo7= Image(
        user_id = 12,image_url = 'https://s.yimg.com/ny/api/res/1.2/MeZMUE1dxJHS4CVmnnAKug--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/8JCvBaFZLwI0tNVQwGZR3w--~B/aD0xMDAwO3c9MTUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/la_times_articles_853/8375cad4ed6b246231f70f540e82139f', description='Kaytranada won Grammys for dance electronic album and dance recording'
    )
    photo8= Image(
        user_id = 16,image_url = 'https://s.yimg.com/ny/api/res/1.2/G8ikMnY1aCI4vUXYqb8c0A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY5OC4yNA--/https://s.yimg.com/uu/api/res/1.2/HC05YZdVOaSflMuZZZiAKQ--~B/aD0xMDkxO3c9MTUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/la_times_articles_853/817ef292d29efbd57c6d35b6a0f011b5', description='Tiara Thomas co-wrote song of the year winner “I Can’t Breathe” with H.E.R. and Dernst Emile II'
    )
    photo9= Image(
        user_id = 19,image_url = 'https://s.yimg.com/ny/api/res/1.2/eEO9ZlDgL93UVfDoWXx68Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyNS43Ng--/https://s.yimg.com/uu/api/res/1.2/6p8DcFxNNvyD6ok3IBcoPw--~B/aD0xMTM0O3c9MTUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/la_times_articles_853/386d30b8b28067cf7705707e4bc55388', description='Anderson.Paak hefts his Grammy for melodic rap performance for “Lockdown.”'
    )
    photo10= Image(
        user_id = 28,image_url = 'https://s.yimg.com/ny/api/res/1.2/JJNRZIDo.ROXmILrE_7ebA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNi42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/9XQc6TIoWPmva3PnwSAX0g--~B/aD0xMDAwO3c9MTUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/la_times_articles_853/7728d36a98cd04fa1ec205a2ee8413b8', description='Bad Bunny accepts the award for Latin pop album at the 63rd Grammy Award outside Staples Center'
    )
    photo11= Image(
        user_id = 24 ,image_url = 'https://s.yimg.com/ny/api/res/1.2/E9mUrifVAYvISG.yQkD8QA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/PgKVXE1i_z.bX6YicUW_6Q--~B/aD0xMDAwO3c9MTUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/la_times_articles_853/cc77b23c1d879644717f4a04a46ddb1b', description='Miranda Lambert accepts the award for country album for “Wildcard” at the 63rd Grammy Awards outside Staples Center'
    )
    photo12= Image(
        user_id = 9,image_url = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/los-angeles-ca-sunday-march-14-2021-harry-styles-accepts-news-photo-1615791987.?resize=480:*', description='Harry Styles accepts the award for pop solo performance for “Watermelon Sugar.”'
    )
    photo13= Image(
        user_id = 2,image_url = 'https://gazettengr.com/wp-content/uploads/burna-boy-grammy-plaque-1.jpg', description='African Giant'
    )
    photo14= Image(
        user_id = 3,image_url = 'https://assets.capitalfm.com/2012/07/rihanna-at-2008-grammy-awards-1329479489-view-1.jpg', description='Just one of seven'
    )
    photo15= Image(
        user_id = 4,image_url = 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1393&h=1857&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F15%2Fbeyonce-6.jpg', description='Your self-worth is determined by you. You don’t have to depend on someone telling you who you are.'
    )
    photo16= Image(
        user_id = 5,image_url = 'https://www.rap-up.com/app/uploads/2013/06/drake-grammy.jpg', description='Everybody has an addiction, mine happens to be success'
    )
    photo17= Image(
        user_id = 5,image_url = 'https://www.bet.com/style/fashion/2019/02/10/rapper-drake-style-at-the-2019-grammy-awards/_jcr_content/bodycopycontainer/embedded_image_0/image.custom1200x1561.dimg/__1549854721441__1549854456134/021019-style-drake-1.jpg', description='Before you give up, think of the reason you held on so long'
    )
    photo18= Image(
        user_id = 17,image_url = 'https://media.pitchfork.com/photos/604d25056f7b31517a7d89cf/2:1/w_2560%2Cc_limit/Thundercat.png', description='I can fall asleep in the shower without drowning'
    )
    photo19= Image(
        user_id =18,image_url = 'https://assets.capitalfm.com/2011/07/john-legend-1297675266-view-1.jpg', description='When we think about equality and freedom and justice, we know we’ve got more work to do, and we’re going to do that work. We want to do that work, and we hope that our song is inspiration for those who want to do that work as well.'
    )
    photo20= Image(
        user_id = 23,image_url = 'https://cdn.britannica.com/82/182082-050-C006C642/Justin-Bieber-2013.jpg', description='I amm looking forward to influencing others in a positive way. My message is you can do anything if you just put your mind to it'
    )
    photo21= Image(
        user_id = 30,image_url = 'https://onerpm.com/wp-content/uploads/sites/4/2021/03/Picture1.png', description='Una aventura es mas bonita cuando escapamos solos tu y yo'
    )
    
    
    db.session.add(photo1)
    db.session.add(photo2)
    db.session.add(photo3)
    db.session.add(photo4)
    db.session.add(photo5)
    db.session.add(photo6)
    db.session.add(photo7)
    db.session.add(photo8)
    db.session.add(photo9)
    db.session.add(photo10)
    db.session.add(photo11)
    db.session.add(photo12)
    db.session.add(photo13)
    db.session.add(photo14)
    db.session.add(photo15)
    db.session.add(photo16)
    db.session.add(photo17)
    db.session.add(photo18)
    db.session.add(photo19)
    db.session.add(photo20)
    db.session.add(photo21)
    
    db.session.commit()
    
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()