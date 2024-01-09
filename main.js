

function submitQuiz(event) {
    // Prevent the default form submission behavior
    event.preventDefault();


    var form = document.getElementById("quiz-container");

    // Check if the form is valid
    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }

    const firstName = document.getElementById("first-name").value;
    const city = document.getElementById("city").value;
    const birdTypeElement = document.querySelector('input[name="bird-type"]:checked');
    const birdType = birdTypeElement ? birdTypeElement.value : '';
    const tagLine = document.getElementById("tag-line").value;

    console.log("First Name: ", firstName);
    console.log("City: ", city);
    console.log("Bird Type: ", birdType);
    console.log("Tag Line: ", tagLine);


    const nickName = birdType ? getNickName(birdType) : ''; // Function to get nickname based on bird type
    const birdImage = birdType ? getBirdImage(birdType) : ''; // Function to get bird image based on bird type

    // Constructing the result message
    var resultMessage = firstName + ' ' + nickName + ' of ' + city;
    if (tagLine) {
        resultMessage += '\n' + tagLine;
    }
    resultMessage += '.';

    // Displaying the result
    var result = document.getElementById('result');
    result.classList.add('birder-card')
    result.innerHTML =
        '<h3>Officially Knighted Birder</h3>' +
        '<div class="bird-id">' +
        '<img src="' + birdImage + '" alt="bird">' +
        '<h4>' + resultMessage + '</h4>' +
        '</div>' ;

    return false;
}

//inner html return to blank
function resetForm() {
    var result = document.getElementById('result');
    result.classList.remove('birder-card')
    result.innerHTML = '';
    console.log('Form reset');
}

// Example functions to get nickname and bird image based on bird type
function getNickName(birdType) {
    // determine nickname
    if (birdType == 'warbler') {
        return "Warbler Watcher"
    } else if (birdType == 'sparrow') {
        return "Sparrow Spotter"
    } else if (birdType == 'chickadee') {
        return "Chickadee Checker-outer"
    } else if (birdType == 'finch') {
        return "Finch Finder"
    }
}

function getBirdImage(birdType) {
    // Logic to determine bird image
    if (birdType == 'warbler') {
        return "../images/warbler-watcher.png"
    } else if (birdType == 'sparrow') {
        return "../images/sparrow-spotter.png"
    } else if (birdType == 'chickadee') {
        return "../images/chickadee-checker.png"
    } else if (birdType == 'finch') {
        return "../images/finch-finder.png"
    };
}

// birdie hop
document.addEventListener("DOMContentLoaded", function () {
    let hops = 5;
    var visitCount = localStorage.getItem('visitCount') || 0; // Get current count or initialize to 0
    console.log('bird function', visitCount)
    visitCount = (parseInt(visitCount) + 1) % hops; // Increment and loop back to 0 after 8
    localStorage.setItem('visitCount', visitCount); // Save updated count

    var birdContainer = document.getElementById('bird-container');
    birdContainer.style.left = (visitCount * (100/(hops - 1))) + '%';
});
