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
        '/images/cooperstown.jpg': 'The Baseball Hall of Fame was built in Cooperstown New York thanks to the Abner Doubleday Myth',
        '/images/adoubleday.jpg': 'Abner Doubleday was a well known Union soldier in the Civil War, but there is no evidence that he ever played baseball', 
        '/images/agraves.jpg': 'Abner Graves first claimed that he saw Doubleday invent baseball in the first decade of the 20th century, long after Doubleday had died.'
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
        '/images/fdouglas.jpg': 'An African American delegation led by Frederick met with President Johnson to express the needs of newly-freed African Americans. After they left Johnson told his secretary that Douglas, like all Black people, would slit white people/s throats if they had the chance.',
        '/images/radicals.jpg': 'Johnson/s racist reconstruction policies galvinized "radical Republicans" to demand citizenship and suffrage for all African Americans',
        '/images/new-politicians.jpg': 'Hundreds of African Americans in the South were elected to political office during the Reconstruction Era'
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