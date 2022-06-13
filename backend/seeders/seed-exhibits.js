const db = require('../models')

db.Exhibit.create([{
    name: 'Baseball',
    tags: [
        'Sports', 'Abner Doubleday', 'American Exceptionalism', 'Invented Tradition'
    ],
    regions: {
        1: 'England',
        2: 'New York State' , 
        3: 'National'
    }, 
    timePeriod: 'mid 18th - early 20th century',
    description: '/descriptions/baseball.txt',
    sources: {
        'Bryan Curtis': 'In Search of Baseball/s Holy Grail',
        'David Block': 'Baseball Before We Knew It',
        'Ken Burns': 'Baseball'
    }, 
    images: {
        'profile-image': '/images/baseball-ball-of-fame',
        'image2': '/images/abner-doubleday.jpg', 
        'image3': '/images/abner-graves.jpg'
    }, 
    videos: {
        'https://www.pbs.org/show/baseball/': 'The first part of Baseball: A Film by Ken Burns discusses the Doubleday myth' 
    }, 
}, {
    name: 'Andrew Johnson',
    tags: [
        'Politics', 'Reconstruction', 'Racism', 'Fourteenth Amendment'
    ],
    regions: {
        1: 'The South', 
        2: 'National'
    }, 
    timePeriod: '1865-69',
    description: '/descriptions/andrewjohnson.txt',
    sources: {
        'Eric Foner': 'Reconstruction: America/s Unfinished Revolution',
        'Henry Louis Gates Jr.': 'Stony the Road'
    }, 
    images: {
        'profile-image': '/images/Andrew_Johnson.jpg',
        'image2': '/images/the-massacre-at-new-orleans',
        'image3': '/images/Nast-Johnson-Cartoon'
    }, 
    videos: {
        'https://www.pbs.org/weta/reconstruction/': 'If you prefer documentaries to books, check out Henry Louis Gates Reconstruction documentary' 
    }, 
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})