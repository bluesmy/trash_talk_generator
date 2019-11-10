// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateTrashTalk function
function generateTrashTalk(options) {
  // define variables
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let job
  let randomTask
  let randomPhrase
  let trashTalk = []

  // return error notice if user did not choose any jobs
  if (options === '') {
    return false
  }

  // create trash talk according to job selected 
  else if (options === 'engineer') {
    job = '工程師'
    randomTask = sample(task.engineer)
    randomPhrase = sample(phrase)
    trashTalk.push(job, randomTask, randomPhrase)
  }

  else if (options === 'designer') {
    job = '設計師'
    randomTask = sample(task.designer)
    randomPhrase = sample(phrase)
    trashTalk.push(job, randomTask, randomPhrase)
  }

  else if (options === 'entrepreneur') {
    job = '創業家'
    randomTask = sample(task.entrepreneur)
    randomPhrase = sample(phrase)
    trashTalk.push(job, randomTask, randomPhrase)
  }

  return trashTalk

}

// export generateTrashTalk function for other files to use
module.exports = generateTrashTalk