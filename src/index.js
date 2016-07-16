export async function prompt (questions) {
  let list = [],
      details = {}

  for (let question of questions) {
    let asker = new Promise((resolve, reject) => {
      resolve('test')
    })

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
