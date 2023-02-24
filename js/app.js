const form = document.querySelector('form');
const output = document.querySelector('.output');

const handleSubmit = function(event) {
  event.preventDefault();

  // Possible values for `day`: 
  // 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'
  const day = form.day.value; 

  // Possible values for `meal`: 
  // 'breakfast', 'lunch', 'dinner'
  const meal = form.meal.value; 

  console.log(day, meal);

  // Declare a variable to hold the answer
  let answer;

  /*************************************/
  /* ^^^ Don't edit the above code ^^^ */
  /*************************************/

  /***********************/
  /* Put your code below */
  /***********************/

  // Using if, else if and else blocks: assign a meal recommendation to `answer` based on the submitted options for `day` and `meal`.

  // Monday Meals: 
  if (day === 'mon' && meal === 'breakfast')
    answer = 'Have some Avocado Toast to kick off this week';
  else if (day === 'mon' && meal === 'lunch')
    answer = 'Grilled Chicken Salad';
  else if (day === 'mon' && meal === 'dinner')
    answer = 'Faijta Pasta are best for Monday Supper';
  else answer = 'Please select both options'
    
  //  Tuesday Meals
  if (day === 'tue' && meal === 'breakfast')
    answer = 'French Toast'; 
  else if (day === 'tue' && meal === 'lunch')
    answer = 'You would love Roast Beef Sandwich on a Tuesday afternoon'
  else if (day === 'tue' && meal === 'dinner')
    answer = 'Roasted Cauliflower Tacos'
  
  //  Wednesday Meals
  if (day === 'wed' && meal === 'breakfast')
    answer = 'Sausages are the best mid week breakfast'; 
  else if (day === 'wed' && meal === 'lunch')
    answer = 'Vegetarian Burrito'
  else if (day === 'wed' && meal === 'dinner')
    answer = 'Minestrone Soup'
  
  // Thursday Meals
  if (day === 'thu' && meal === 'breakfast')
    answer = 'Bacon'; 
  else if (day === 'thu' && meal === 'lunch')
    answer = 'Chicken Quesadillas'
  else if (day === 'thu' && meal === 'dinner')
    answer = 'Bean Chilis on a Thursday night are the best'

  // Friday Meals
  if (day === 'fri' && meal === 'breakfast')
    answer = 'You gotta have Cereal for a Friday Morning'; 
  if (day === 'fri' && meal === 'lunch')
    answer = 'Frittata'
  else if (day === 'fri' && meal === 'dinner')
    answer = 'Sesame Tofu'
    
  // Saturday Meals
  if (day === 'sat' && meal === 'breakfast')
    answer = 'Chicken and Waffles'; 
  else if (day === 'sat' && meal === 'lunch')
    answer = 'Hummus and Veggie Sandwich'
  else if (day === 'sat' && meal === 'dinner')
    answer = 'Stuffed Shells'
    
  // Sunday Meals
  if (day === 'sun' && meal === 'breakfast')
      answer = 'Pancakes'; 
  else if (day === 'sun' && meal === 'lunch')
      answer = 'Tomato Soup and Grilled Cheese'
  else if (day === 'sun' && meal === 'dinner')
      answer = 'Baked Feta'
    
  // If you need 7 different meal recommendations based on at least one form option, the code would look like this:
  // if (day === 'mon')
  //   answer = 'Sausages';
  // if (day === 'tue')
  //   answer = 'French Toast'; 
  // if (day === 'wed')
  //   answer = 'Cereal';
  // if (day === 'thu')
  //   answer = 'Bacon';
  // if (day === 'fri')
  //   answer = 'Avocado Toast';
  // if (day === 'sat')
  //   answer = 'Chicken and Waffles';
  // if (day === 'sun')
  //   answer = 'Pancakes';
  //   else answer = 'Please select both Options'
    
  
  



  /************************************/
  /* Don't edit the rest of this code */
  /************************************/

  output.innerHTML = answer;

}

form.addEventListener('submit', handleSubmit);