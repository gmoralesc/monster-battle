function getRandomNumber(max = 1, min = 1) {
  return min + Math.floor(Math.random() * max);
}

function calculateStatus(initial, current, count) {
  const newHealth = Math.max(0, current - count);
  const newPercentage = Math.ceil((newHealth / initial) * 100);
  return {
    newHealth,
    newPercentage,
  };
}

function calculateBarColor(percentage) {
  let color = "";
  if (percentage > 66) {
    color = "green";
  } else if (percentage > 33) {
    color = "orange";
  } else {
    color = "red";
  }
  return color;
}
