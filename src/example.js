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
  let result

  try {
    result = await prompt('tested')
  } catch (err) {
    console.error(err)
  }

  console.log(result)
})()
