import { green } from 'chalk'

const ask = async question => new Promise(resolve => {
  let answer

  process.stdin.resume()
  process.stdout.write(green('test '))

  process.stdin.on('data', data => {
    // ctrl-c ( end of text )
    if (String(data) === '\u0003') {
      process.exit()
    }

    resolve(String(data))
  })
})

export async function prompt (questions) {
  let list = [],
      details = {}

  process.stdin.resume()
  process.stdin.setEncoding('utf8')

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
