function scuberGreetingForFeet(ride) {
  let charge;
  if (ride <= 400) {
    charge = "This one is on me!";
  } else if (400 < ride && ride < 2000) {
    charge = "That will be twenty bucks.";
  } else if (ride > 2000 && ride < 2500) {
    charge = "I will gladly take your thirty bucks.";
  } else if (ride > 2500) {
    charge = "No can do.";
  }

  return charge;
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
