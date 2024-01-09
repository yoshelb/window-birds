// step 1. gather each answer document.getElementById("first-name")




// function submitQuiz() {
//     var score = 0;
//     var numOfQuestions = 1; // Change this based on the number of questions in your quiz
//     var correctAnswers = ["Option1"]; // Replace with correct answers

//     for (var i = 1; i <= numOfQuestions; i++) {
//         var radios = document.getElementsByName('question' + i);
//         for (var j = 0; j < radios.length; j++) {
//             var radio = radios[j];
//             if (radio.value == correctAnswers[i - 1] && radio.checked) {
//                 score++;
//                 break;
//             }
//         }
//     }

//     // Display results
//     var result = document.getElementById('result');
//     result.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + numOfQuestions + '</span>.</h3>';
//     return false; // To prevent page refresh
// }

function submitQuiz() {
    const firstName = document.getElementById("first-name");
    const city = document.getElementById("city");
    const birdType = document.getElementByName("bird-type");
    const tagLine = document.getElementById("tag-line");

    console.log(firstName)
    console.log(city)
    console.log(birdType)
    console.log(tagLine)

}
