let rates = { dec: null, use: null, exp: null };

document.getElementById('b1').addEventListener('click', (event) => setAnswer('dec', 0, 'q1', event));
document.getElementById('g1').addEventListener('click', (event) => setAnswer('dec', 10, 'q1', event));
document.getElementById('n1').addEventListener('click', (event) => setAnswer('dec', 5, 'q1', event));

document.getElementById('b2').addEventListener('click', (event) => setAnswer('use', 0, 'q2', event));
document.getElementById('g2').addEventListener('click', (event) => setAnswer('use', 10, 'q2', event));
document.getElementById('n2').addEventListener('click', (event) => setAnswer('use', 5, 'q2', event));

document.getElementById('b3').addEventListener('click', (event) => setAnswer('exp', 0, 'q3', event));
document.getElementById('g3').addEventListener('click', (event) => setAnswer('exp', 10, 'q3', event));
document.getElementById('n3').addEventListener('click', (event) => setAnswer('exp', 5, 'q3', event));

//function disable(question) {
//    const questionBlock = document.getElementById(`q${question.charAt(0)}`);
//    const buttons = questionBlock.querySelectorAll('.btns button');
//    buttons.forEach(button => {
//        button.disabled = true;
//   });
//}
function setAnswer(question, rate,questionId,event){
    rates[question] = rate;
    disabledBtn(questionId);
    selectedBtn(questionId, event);
    enableRow(questionId);
    if (rates.dec !== null && rates.use !== null && rates.exp !== null) {
        calculateAvg();
    }
}
function disabledBtn(questionId) {
    const buttons = document.querySelectorAll(`#${questionId} .btns button`);
    buttons.forEach(button => {
        button.disabled = true;
    });
}
function selectedBtn(questionId) {
    const buttons = document.querySelectorAll(`#${questionId} .btns button`);
    buttons.forEach(button => {
        button.classList.remove('selected');
        if (button.disabled) {
            if (button === event.target) {
                button.classList.add('selected');
                button.style.transform = "scale(1.2)";
                button.style.opacity = "0.75";
                button.style.background = "linear-gradient(to top, #449992 0%, #0f0fde 100%"
                button.style.pointerEvents = "none";
            }
            else {
                button.style.transform = "scale(0.8)";
                button.style.opacity = "0.5";
                button.style.pointerEvents = "none";
            }
        }
        else {
            button.style.transform = "scale(1)";
            button.style.opacity = "1";
        }
    });
}
function enableRow(questionId) {
    if (questionId === 'q1') {
        document.getElementById('q2').style.pointerEvents = "auto";
    }
    else if (questionId === 'q2') {
        document.getElementById('q3').style.pointerEvents = "auto";
    }
}
function calculateAvg() {
    let total = rates.dec + rates.use + rates.exp;
    count = Object.values(rates).filter(rate => rate !== null).length;
    if (count === 3) {
        total /= count;
        document.getElementById('res').innerText = total.toFixed(2);
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('q2').style.pointerEvents = "none";
        document.getElementById('q3').style.pointerEvents = "none";
    });
}




