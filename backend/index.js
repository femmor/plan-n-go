import express from 'express';

const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Backend server is working!')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})