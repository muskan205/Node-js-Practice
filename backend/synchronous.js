const fs = require('fs')


const data = fs.writeFileSync('new.txt', 'Hey muskan this is sam')



const readingData = fs.readFileSync('new.txt', 'utf-8')

const data1 = fs.readFile('new.txt', 'utf-8', (err, data) => {
    if (data) {
        return console.log(data)
    }
    else {
        return null
    }
})


const dataTes = fs.appendFile('new.txt', 'okay then are you are available')

fs.promises.readFile('new.txt', 'utf-8')
    .then((data) => {
        console.log("____________________________", data)
    })
    .catch((err) => {
        console.log("Error", err)

    }
    )

