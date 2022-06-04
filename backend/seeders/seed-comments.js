const db = require('../models')

// In order to use await we need an async function
async function seed() {
    // Get the exhibit, Baseball
    let exhibit = await db.Exhibit.findOne({ name: 'Baseball' })

    // Create a fake, sample comment
    let comment = await db.Comment.create({
        author: 'James Broucek',
        thumbsUp: true,
        content: 'Wow, I can/t believe the Doubleday theory rests entirely on one guy/s claims.'
    })

    // Add that comment to the exhibit's comment array
    exhibit.comments.push(comment.id)
    
    // Exit the program
    process.exit()
}

seed()