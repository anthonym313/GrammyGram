from app.models import db, User
# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        avatar= 'https://i0.wp.com/i.pinimg.com/236x/a7/35/bc/a735bc244c696f41a450bc358a027f18--free-wooden-pallets--pallets.jpg',username='Demo', email='demo@aa.io', password='password')
    burnaboygram = User(
        avatar='https://static01.nyt.com/images/2020/08/09/arts/09burna-boy3/09burna-boy3-mediumSquareAt3X.jpg', username='burnaboygram', email='burnaboygram@gg.io', password='burnaboygram')
    badgalriri = User(
        avatar='https://ih1.redbubble.net/image.562691889.7772/flat,750x,075,f-pad,750x1000,f8f8f8.u6.jpg',username='badgalriri', email='badgalriri@gg.io', password='badgalriri')
    beyonce = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Beyonc%25C3%25A9%2BKnowles/Beyonc%25C3%25A9_1_1_1610748215Muzooka.jpg?itok=vKZfHK2G',username='beyonce', email='beyonce@gg.io', password='beyonce')
    champagnepapi = User(
        avatar='https://i.pinimg.com/736x/ed/9c/41/ed9c41254cca5e2a5b581fb9cee6f8c7.jpg',username='champagnepapi', email='champagnepapi@gg.io', password='champagnepapi')
    billieeilish = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/billie_eilish_press_0.jpg?itok=9K84C7uh',username='billieeilish', email='billieeilish@gg.io', password='billieeilish')
    taylorswift = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Taylor%2BSwift/Taylor%2520Swift_1_1_1622136627Muzooka.jpg?itok=v7IGvAW8',username='taylorswift', email='taylorswift@gg.io', password='taylorswift')
    thestallion = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Megan%2BThee%2BStallion/Megan%2520Thee%2520Stallion_1_1_1606246434.jpg?itok=eqr6p5sg',username='thestallion', email='thestallion@gg.io', password='thestallion')
    harrystyles = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Harry%2BStyles/Harry%2520Styles_1_1_1611196182.jpg?itok=MUtZOQW8',username='harrystyles', email='harrystyles@gg.io', password='harrystyles')
    ladaygaga = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Lady%2BGaga/Lady%2520Gaga_1_1_1615980732Muzooka.jpg?itok=DR1K4UqD',username='ladaygaga', email='ladaygaga@gg.io', password='ladaygaga')
    dualipa = User(
        avatar='https://cosasbucket.s3.amazonaws.com/wp-content/uploads/2021/02/25174351/dua-lipa-attends-varietys-2nd-annual-hitmakers-brunch-at-news-photo-1604677508.jpg', username='dualipa', email='dualipa@gg.io', password='dualipa')
    kaytranada = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Kaytranada/Kaytranada_1_1_1625749932Muzooka_0.jpg?itok=5jcF4pWo',username='kaytranada', email='kaytranada@gg.io', password='kaytranada')
    snarkpuppy = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Snarky%2BPuppy/Snarky%2520Puppy_1_1_1605194866Muzooka.jpg?itok=LFPgaXkL',username='snarkpuppy', email='snarkpuppy@gg.io', password='snarkpuppy')
    bodycountofficial = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Body%2BCount/Body%2520Count_1_1_1578384474.jpg?itok=MSjeL_wc',username='bodycountofficial', email='bodycountofficial@gg.io', password='bodycountofficial')
    ledisi = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Ledisi%2BYoung/Ledisi_1_1_1592251562.jpg?itok=A0yeqxmk',username='ledisi', email='ledisi@gg.io', password='ledisi')
    hermusicofficial = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/H.E.R./H.E.R._1_1_1606242943.jpg?itok=_qfMkE8W',username='hermusicofficial', email='hermusicofficial@gg.io', password='hermusicofficial')
    thundercat = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Thundercat/Thundercat_1_1_1607384052Muzooka.jpg?itok=7_YcUjDD',username='thundercat', email='thundercat@gg.io', password='thundercat')
    johnlegend = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/John%2BLegend/John%2520Legend_1_1_1610978206.jpg?itok=Jq4E4M11',username='johnlegend', email='johnlegend@gg.io', password='johnlegend')
    andersonpaak = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Anderson%2B.Paak/Anderson%2520.Paak_1_1_1605521955Muzooka.jpg?itok=_U_wk8W6',username='andersonpaak', email='andersonpaak@gg.io', password='andersonpaak')
    nas = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Nas/NAS_1_1_1604074120Muzooka.jpg?itok=cu9GKrmy',username='nas', email='nas@gg.io', password='nas')
    vincegillofficial = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Vince%2BGill/Vince%2520Gill_1_1_1581551728.jpg?itok=aB96wKgE',username='vincegillofficial', email='vincegillofficial@gg.io', password='vincegillofficial')
    danandshay = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Dan%2B%252B%2BShay/Dan%2520%252B%2520Shay_1_1_1595519839.jpg?itok=YuZpUbdu',username='danandshay', email='danandshay@gg.io', password='danandshay')
    justinbieber = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Justin%2BBieber/Justin%2520Bieber_1_1_1612819499Muzooka.jpg?itok=va2rphG4',username='justinbieber', email='justinbieber@gg.io', password='justinbieber')
    mirandalambert = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Miranda%2BLambert/Miranda%2520Lambert_1_1_1621961393Muzooka.jpg?itok=Xrd2D_e8',username='mirandalambert', email='mirandalambert@gg.io', password='mirandalambert')
    jimkimowest = User(
        avatar='https://www.beatricewood.com/images_performances/jim_kimo_west_1.jpg',username='jimkimowest', email='jimkimowest@gg.io', password='jimkimowest')
    chickcorea = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Chick%2BCorea/Chick%2520Corea_1_1_1626086451Muzooka.jpg?itok=6s74RObd',username='chickcorea', email='chickcorea@gg.io', password='chickcorea')
    kanyewest = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Kanye%2BWest/Kanye%2520West_1_1_1610407511Muzooka.jpg?itok=gvp1fNdy',username='kanyewest', email='kanyewest@gg.io', password='kanyewest')
    badbunnypr = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Bad%2BBunny/Bad%2520Bunny_1_1_1616693635Muzooka.jpg?itok=ERCypyge',username='badbunnypr', email='badbunnypr@gg.io', password='badbunnypr')
    fitopaezmusica = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Fito%2BPaez/Fito%2520Paez_1_1_1621961394Muzooka.jpg?itok=MllkZnZz',username='fitopaezmusica', email='fitopaezmusica@gg.io', password='fitopaezmusica')
    gruponiche = User(
        avatar='https://www.grammy.com/sites/com/files/styles/artist_circle/public/muzooka/Grupo%2BNiche/Grupo%2520Niche_1_1_1621961515Muzooka.jpg?itok=V800fpfV',username='gruponiche', email='gruponiche@gg.io', password='gruponiche')
    db.session.add(demo)
    db.session.add(burnaboygram)
    db.session.add(badgalriri)
    db.session.add(beyonce)
    db.session.add(champagnepapi)
    db.session.add(billieeilish)
    db.session.add(taylorswift)
    db.session.add(thestallion)
    db.session.add(harrystyles)
    db.session.add(ladaygaga)
    db.session.add(dualipa)
    db.session.add(kaytranada)
    db.session.add(snarkpuppy)
    db.session.add(bodycountofficial)
    db.session.add(ledisi)
    db.session.add(hermusicofficial)
    db.session.add(thundercat)
    db.session.add(johnlegend)
    db.session.add(andersonpaak)
    db.session.add(nas)
    db.session.add(vincegillofficial)
    db.session.add(danandshay)
    db.session.add(justinbieber)
    db.session.add(mirandalambert)
    db.session.add(jimkimowest)
    db.session.add(chickcorea)
    db.session.add(kanyewest)
    db.session.add(badbunnypr)
    db.session.add(fitopaezmusica)
    db.session.add(gruponiche)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
