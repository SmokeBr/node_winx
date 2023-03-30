const express = require ('express')

const app = express()


function maia(req, res) {
  res.json({ message: 'Maia'})
}


app.get('/', (req, res) => {
  res.send('<h1>Batatinhas fritas</h1>')
})

app.get('/users', maia)

app.listen(3000)
console.log('Rodando na porta 3000');
