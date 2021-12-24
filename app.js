let userName = ""



const switcher = document.querySelector(".btn")

const theChallenge = document.getElementById("challenge1")



const theEnding = document.getElementById("ending")



switcher.addEventListener("click", function() {



    userName = document.getElementById("firstName1").value

    if (userName === "") {
        alert("You must enter your name.")
    } else

    {

        var rd1 = document.getElementById("radEasy")
        var rd2 = document.getElementById("radMedium")
        var rd3 = document.getElementById("radHard")

        var diffValue = 0



        if (rd1.checked == true) {
            diffValue = 1
        } else if (rd2.checked == true) {
            diffValue = 2
        } else if (rd3.checked) {
            diffValue = 3
        }



        let randomNumber = Math.floor(Math.random() * 11 + 1)

        if (diffValue == 1) {
            randomNumber = randomNumber
        } else if (diffValue == 2) {
            randomNumber += 11
        } else if (diffValue == 3) {
            randomNumber += 22
        }

        console.log(randomNumber)

        let challenge = ''

        //cardio then physical conditioning

        switch (randomNumber) {

            case 1:
                challenge = 'do fifty push ups.'
                break;
            case 2:
                challenge = 'run two kilometres.'
                break;
            case 3:
                challenge = 'do twenty five pull ups.'
                break;
            case 4:
                challenge = 'run two and a half kilometres.'
                break;
            case 5:
                challenge = 'do one hundred sit ups.'
                break;
            case 6:
                challenge = 'row for one kilometre.'
                break;
            case 7:
                challenge = 'do fifty burpees.'
                break;
            case 8:
                challenge = 'do one hundred abdominal crunches.'
                break;
            case 9:
                challenge = 'do one hundred and fifty air squats.'
                break;
            case 10:
                challenge = 'do three hill sprints with a length of one hundred metres.'
                break;
            case 11:
                challenge = 'do one hundred lunges .'
                break;
            case 12:
                challenge = 'run three kilometres.'
                break;
            case 13:
                challenge = 'do a three minute plank.'
                break;
            case 14:
                challenge = 'run three and a half kilometres.'
                break;
            case 15:
                challenge = 'do a four minute plank.'
                break;
            case 16:
                challenge = 'do one hundred russian twists.'
                break;
            case 17:
                challenge = 'row one and a half kilometres.'
                break;
            case 18:
                challenge = 'do one hundred and fifty abdominal crunches.'
                break;
            case 19:
                challenge = 'do one hundred and fifty situps.'
                break;
            case 20:
                challenge = 'do seventy five pull ups.'
                break;
            case 21:
                challenge = 'do a half of a Murph.'
                break;
            case 22:
                challenge = 'do one hundred push ups.'
                break;
            case 23:
                challenge = 'do one hundred burpees followed by one hundred push ups.'
                break;
            case 24:
                challenge = 'do one hundred and fifty situps followed by one hundred russian twists.'
                break;
            case 25:
                challenge = 'run five kilometres.'
                break;
            case 26:
                challenge = 'do one hundred and fifty squats followed by two hundred lunges.'
                break;
            case 27:
                challenge = 'do three hundred lunges.'
                break;
            case 28:
                challenge = 'do one hundred situps followed by one hundred crunches followed by two hundred Russian twists.'
                break;
            case 29:
                challenge = 'row two and a half kilometres.'
                break;
            case 30:
                challenge = 'do one hundred pull ups.'
                break;
            case 31:
                challenge = 'do three hundred squats.'
                break;
            case 32:
                challenge = 'complete a Murph.'
                break;
            case 33:
                challenge = 'do one hundred and fifty Russian twists followed by one hundred situps and one hundred crunches.'
                break;
            default:
                challenge = 'you have the day off!'
        }


        theChallenge.textContent = userName + ", " + challenge

        //theEnding.textContent = "I hope that you have a wonderful time suffering through the duration of your challenge"


        // console.log(`I hope that you have a wonderful time suffering through the duration of your challenge` + userName)


    }

})



// console.log(userName)

//userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
// finish this statemnet and link it to a variable