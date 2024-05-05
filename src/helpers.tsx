/*        ASK THE AUDIENCE        */
//Simulates 100 audience members answering the question
//The correct answer weighs as much as the incorrect answers combined.
//need to adjust weight based on difficulty of question

export const distributeWeight = (
  options: [string, boolean][],
  questionNumber: number
) => {
  const totalWeight = 100;
  let difficulty = 0;

  if (questionNumber <= 5) {
    difficulty = 40;
  } else if (questionNumber <= 10) {
    difficulty = 35;
  } else difficulty = 30;
console.log("difficulty", difficulty)
console.log("options: ", options)
  const count: { [key: string]: number } = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  };

  const incorrectWeight = totalWeight - difficulty;
  const correctWeight = difficulty;
  const point1 = Math.floor(Math.random() * incorrectWeight);
  const point2 = Math.floor(Math.random() * incorrectWeight - point1);
  const point3 = incorrectWeight - point1 - point2;
  const weights = [point1, point2, point3];

  const incorrectOptions = options.filter((option) => !option[1]);
  const correctOption = options.find((option) => option[1]);
  const arr = incorrectOptions.map((option, index) => ({
    answer: option[0],
    correct: false,
    weight: weights[index],
  }));
  arr.push({
    answer: correctOption ? correctOption[0] : "",
    correct: true,
    weight: correctWeight,
  });
  const weightedArr = generateWeightedArr(arr);
  for (let i = 0; i < 100; i++) {
    const choice = getRandomItemFromWeightedArr(weightedArr);
    count[choice as string]++;
  }
  return count;
};

//create a weighted array that totals the weights of the incorrect answers and the correct answer
function generateWeightedArr(arr: { answer: string; weight: number }[]) {
  const weightedArr: string[] = [];
  arr.forEach((item) => {
    for (let i = 0; i < item.weight; i++) {
      weightedArr.push(item.answer);
    }
  });

  return weightedArr;
}
//get a random item from the weighted array
function getRandomItemFromWeightedArr(weightedArr: string | unknown[]) {
  const randomIndex = Math.floor(Math.random() * weightedArr.length);
  return weightedArr[randomIndex];
}

//phone a friend
//<a href="tel:+4733378901">
