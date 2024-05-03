/*        ASK THE AUDIENCE        */
//Simulates 100 audience members answering the question
//The correct answer weighs as much as the incorrect answers combined.
//need to adjust weight based on difficulty of question
 const arr = [
    { answer: 'incorrect', weight: 65 },
    { answer: 'correct', weight: 35 },
  ]
  //create a weighted array that totals the weights of the incorrect answers and the correct answer
  function generateWeightedArr(arr: { answer: string; weight: number }[]) {
    const weightedArr: string[] = [];
    arr.forEach(item => {
      for (let i = 0; i < item.weight; i++) {
        weightedArr.push(item.answer);
      }
    })
    console.log(weightedArr);
    return weightedArr;
  }
  //get a random item from the weighted array
   function getRandomItemFromWeightedArr(weightedArr: string | unknown[]) {
    const randomIndex = Math.floor(Math.random() * weightedArr.length);
    return weightedArr[randomIndex];
  }
  
  const weightedArr = generateWeightedArr(arr);
  //display the random weighted item to be added to in displayRandomWeightedItem
  const count: {[key: string] : number} = {
    'incorrect': 0,
    'correct': 0,
  }

  export function displayRandomWeightedItem() {
    //run 100 times to see the distribution of correct/incorrect answers. Represents the 100 audience members
  for (let i = 0; i < 100; i++)
    {
      //what each audience member chooses
      const choice = getRandomItemFromWeightedArr(weightedArr);
      count[choice as string]++;
    }
    let totalIncorrect = count['incorrect']
    const assignIncorrectOptions: {[key: string] : number} = {'incorrect1': 0, 'incorrect2': 0, 'incorrect3': 0}
    const keys = Object.keys(assignIncorrectOptions);
    //for incorrect options, assign 3 random numbers that sum to the total number of incorrect audience choices
    keys.forEach((option, index) => {
      if (index < keys.length - 1) {
        const allocated = Math.floor(Math.random() * totalIncorrect);
        assignIncorrectOptions[option] = allocated;
        totalIncorrect -= allocated; //decrease the total number of incorrect choices left to assign
      } else {
        assignIncorrectOptions[option] += totalIncorrect;
      }
    })
    console.log('Correct:', count['correct']);
    
    console.log('Incorrect:', count['incorrect']);
    console.log("Returned: " + { 'correct': count['correct']}, assignIncorrectOptions)
    return [{ 'correct': count['correct']}, assignIncorrectOptions]
  }

  /*          50/50            */
  export function chooseOneOfThreeIncorrectOptions(incorrectOptions: string[]) {
    const randomIndex = Math.floor(Math.random() * 3);
    console.log(incorrectOptions[randomIndex]);
    return incorrectOptions[randomIndex];
  }

  //phone a friend
  //<a href="tel:+4733378901">
