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
  if (day === 'mon' && meal === 'breakfast') {
    answer = 'Sausages'; 
  }
  if ( meal === 'lunch'){
    answer = 'Grilled Chicken Salad';
  }
  if ( meal === 'dinner'){
    answer = 'Faijta Pasta';
  }

  //  Tuesday Meals
  if (day === 'tue' && meal === 'breakfast') {
    answer = 'French Toast'; 
  }
  if ( meal === 'lunch'){
    answer = 'Roast Beef Sandwich'
  }
  if ( meal === 'dinner'){
    answer = 'Roasted Cauliflower Tacos'
  }

  //  Wednesday Meals
  if (day === 'wed' && meal === 'breakfast') {
    answer = 'Cereal'; 
  }
  if ( meal === 'lunch'){
    answer = 'Vegetarian Burrito'
  }
  if ( meal === 'dinner'){
    answer = 'Minestrone Soup'
  }

  // Thursday Meals
  if (day === 'thu' && meal === 'breakfast') {
    answer = 'Bacon'; 
  }
  if ( meal === 'lunch'){
    answer = 'Chicken Quesadillas'
  }
  if ( meal === 'dinner'){
    answer = 'Bean Chili'
  }

  // Friday Meals
  if (day === 'fri' && meal === 'breakfast') {
    answer = 'Avocado Toast'; 
  }
  if ( meal === 'lunch'){
    answer = 'Frittata'
  }
  if ( meal === 'dinner'){
    answer = 'Sesame Tofu'
  }

  // Saturday Meals
  if (day === 'sat' && meal === 'breakfast') {
    answer = 'Chicken and Waffles'; 
  }
  if ( meal === 'lunch'){
    answer = 'Hummus and Veggie Sandwich'
  }
  if ( meal === 'dinner'){
    answer = 'Stuffed Shells'
  }

  // Sunday Meals
  if (day === 'sun' && meal === 'breakfast') {
    answer = 'Pancakes'; 
  }
  if ( meal === 'lunch'){
    answer = 'Tomato Soup and Grilled Cheese'
  }
  if ( meal === 'dinner'){
    answer = 'Baked Feta'
  }

  
  
  



  /************************************/
  /* Don't edit the rest of this code */
  /************************************/

  output.innerHTML = answer;

}

form.addEventListener('submit', handleSubmit);