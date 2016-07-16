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

const singleQuestion = {
  name: 'title',
  message: 'Project name'
}

let results = (async function() {
  const result = await prompt(singleQuestion)
  console.log(result)
})()
