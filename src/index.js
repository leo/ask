import { green, bold } from 'chalk'
import camelCase from 'camelcase'
import capitalize from 'capitalize-first-letter'

const { stdin, stdout } = process

const ask = async question => new Promise(resolve => {
  let answer

  stdin.resume()
  stdout.write(green('?') + ' ' + bold(question.message) + ' ')

  stdin.on('data', data => {
    const theString = String(data)

    // CTRL + C (end of text)
    if (theString === '\u0003' || theString === 'exit\n') {
      process.exit()
    }

    resolve(theString)
  })
})

export async function prompt (questions) {
  let list = [],
      details = {}

  if (typeof questions === 'string') {
    const question = questions
    questions = []

    const name = camelCase(question)

    questions.push({
      name,
      message: capitalize(name)
    })
  }

  if (!Array.isArray(questions)) {
    // Make a copy instead of using the instance
    const question = Object.assign({}, questions)
    questions = []

    questions.push(question)
  }

  stdin.resume()
  stdin.setEncoding('utf8')

  for (let question of questions) {
    let asker = await ask(question)

    let index = list.push(asker)
    details[index] = question
  }

  return new Promise((resolve, reject) => {
    const asked = Promise.all(list)

    asked.then(answers => {
      let results = {}

      for (let answer in answers) {
        let result = answers[answer],
            info = details[parseInt(answer) + 1]

        if (!info.name) {
          reject('No name defined for question')
          break
        }

        results[info.name] = result
      }

      resolve(results)
    })

    asked.catch(reject)
  })
}
