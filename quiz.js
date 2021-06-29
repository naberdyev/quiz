function init() {
    const quizEl = document.getElementById('quiz')
    const submitButton = document.getElementsByClassName('submit-button')
    const answerAlert = document.getElementsByClassName('alert')


    let quizStr = ''
    //loop through the array of question
    questions.forEach((question, qIndex) => {
        let answerStr = ''
        question.a.forEach((answer, aIndex) => {
            answerStr += `
            <li>
                <lable>
                    <input type="radio" name="question-${qIndex}">
                    ${answer}
                </lable>
            </li>
            `
        })

        quizStr +=`
        <form> 
            <h1>${question.q}</h1>
            <div class="alert">
                
            </div>
            <ul>
                ${answerStr}
            </ul>
            <lable>
                <input class="submit-button" value="Submit" type="button"> 
            </lable>
        </form>
        `
    })
    quizEl.innerHTML = quizStr;

        // for each question make some html
        // form
        // h1
        // div.alert
        // ul
        // li
        // ...
        //button submit
}


function checkAnswer(params) {
    
}

init()

