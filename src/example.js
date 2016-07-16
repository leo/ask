import { prompt } from './'

const questions = [
  {
    name: 'sheesh',
    message: 'Sheesh?'
  },
  {
    name: 'what',
    message: 'What?'
  }
]

let results = (async function() {
  const result = await prompt(questions)
  console.log(result)
})()
