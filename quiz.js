function init() {
    const quizEl = document.getElementById('quiz')



    let quizStr = ''
    //loop through the array of question
    questions.forEach((question, qIndex) => {
        let answerStr = ''
        const answerOrder = randomRange(question.a.length)
        question.a.forEach((answer, aIndex) => {
            let i = 0;
            answerStr += `
            
            <li style="order:${answerOrder[aIndex]}">
                <label>
                <div class="button answer">
                    <input 
                        id="${'' + qIndex + aIndex}"
                        type="radio" 
                        name="question-${qIndex}"
                        data-correct="${question.correct === aIndex}"
                    >
                    ${answer}
                </div>
                </label>
            </li>
            `
            i++
        })

        quizStr +=`
        <div class="question-block">
        <form> 
            <h1>${question.q}</h1>
            
            <ul class="answers-list">
                ${answerStr}
            </ul>
            <div class="alert"></div>
            <label class="submit">
                <button class="button" type="submit"><span>Submit</span></button> 
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
