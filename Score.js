//Assignment: Categorize Student Scores
function scoreCategory(score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 80 && score <= 89) {
        return "Very Good";
    } else if (score >= 70 && score <= 79) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// Enter Your Score
console.log(scoreCategory(91));
console.log(scoreCategory(85)); 
console.log(scoreCategory(72)); 
console.log(scoreCategory(61));

