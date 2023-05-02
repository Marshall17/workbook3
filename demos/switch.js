let dayNum = 3;
let dayName;
switch (dayNum) {
  case 0:
    dayName = "Sunaday";
    break;

  case 1:
    dayName = "Monday";
    break;

  case 2:
    dayName = "Tuesday";
    break;

  case 3:
    dayName = "Wendesday";
    break;

  case 4:
    dayName = "Thursday";
    break;

  case 5:
    dayName = "Friday";
    break;

  case 6:
    dayName = "Saturday";
    break;

  default:
    dayName = "<unknown>";
    break;
}
console.log(dayName);
