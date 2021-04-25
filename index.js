const express = require('express')
const app = express()
app.use(express.json())

let note=[
    {
        id:1,
        name:'Arto hellas',
        number:040123456,
    },
]


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
app.get('/api/notes', (request, response) => {
    response.json(note)
  })
  app.post('/api/notes', (request, response) => {
    const note = request.body  
    console.log(note)  
    response.json(note)})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)