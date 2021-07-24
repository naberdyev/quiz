function init() {
    const quizEl = document.getElementById('quiz')



    let quizStr = ''
    //loop through the array of question
    questions.forEach((question, qIndex) => {
        let answerStr = ''
        const answerOrder = randomRange(question.a.length)
        question.a.forEach((answer, aIndex) => {
            answerStr += `
            
            <li style="order:${answerOrder[aIndex]}">
                <label>
                    <input 
                        type="radio" 
                        name="question-${qIndex}"
                        data-correct="${question.correct === aIndex}"
                    >
                    ${answer}
                </label>
            </li>
            `
        })

        quizStr +=`
        <div class="question-block">
        <form> 
            <h1>${question.q}</h1>
            
            <ul style="display: flex; flex-direction:column">
                ${answerStr}
            </ul>
            <div class="alert"></div>
            <label>
                <button type="submit">Submit</button> 
            </label>
        </form>
        </div>
        `
    })
    quizEl.innerHTML = quizStr;

    quizEl.addEventListener('submit', function (e) {
        e.preventDefault()
        const selectedInput = e.target.querySelector('input[type=radio]:checked')
        const alert = e.target.querySelector('div.alert')
        console.log(selectedInput);
        if (selectedInput === null) {
            alert.innerHTML = 'You need to select an answer'
        } else if (selectedInput.dataset.correct === "true") {
            alert.innerHTML = "That's correct!"
            alert.style.color = 'green'
        } else {
            alert.innerHTML = 'Oops! Try again!'
            alert.style.color = 'red'
        }
    })
}


init()



function random(n) {
    const r = Math.random() * n
    return Math.floor(r)
}

function randomRange(x) {
    const arr = []
    for (let i = 0; i < x; i++) {
        arr.push(i)
    }

    const randomArr = []
    while(arr.length > 0) {
        randomIndex = random(arr.length)
        const randomNumber = arr[randomIndex]
        randomArr.push(randomNumber)
        arr.splice(randomIndex, 1)
    }

    return randomArr
}
