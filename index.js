function scuberGreetingForFeet(distance){
  // Write your code here!
   if (distance <= 400) {
      return 'This one is on me!';
    } else if (distance > 400 && distance <= 2500) {
      return 'I will gladly take your thirty bucks.';
    } else if (distance > 2500) {
      return 'No can do.';
    }
  }
  

function ternaryCheckCity(city){
  // Write your code here!
  
  let message = ""
  city === "NYC" ? message = "Ok, sounds good." : message = "No go."
  return message
  
}
//  console.log(ternaryCheckCity("Nairobi"))

function switchOnCharmFromTip(tip){
  // Write your code here!

  // 1) should return "Thank you so much." if the tip is generous
  // 2) should return "Thank you." if the tip is not as generous
  // 3) should return "Bye." if anything else
  
//   let message 
//   let generosity = tip >= 20? "generous": "not as generous"
//   generosity = tip ? generosity: null
//   switch (generosity) {
//     case "generous":
//       message = "Thank you so much."
      
//       break;
//     case "not as generous":
//       message = "Thank you."
//       break;
//     default:
//       message = "Bye."
//       break;
//   }
//  return message
switch (tip) {
  case 'generous':
    return 'Thank you so much.';
    break;
  case 'not as generous':
    return 'Thank you.';
    break;
  default:
    return 'Bye.';
}

}

console.log(switchOnCharmFromTip())