let rates = { dec: null, use: null, exp: null };

document.getElementById('b1').addEventListener('click', () => setAnswer('dec', 0));
document.getElementById('g1').addEventListener('click', () => setAnswer('dec', 10));
document.getElementById('n1').addEventListener('click', () => setAnswer('dec', 5));

document.getElementById('b2').addEventListener('click', () => setAnswer('use', 0));
document.getElementById('g2').addEventListener('click', () => setAnswer('use', 10));
document.getElementById('n2').addEventListener('click', () => setAnswer('use', 5));

document.getElementById('b3').addEventListener('click', () => setAnswer('exp', 0));
document.getElementById('g3').addEventListener('click', () => setAnswer('exp', 10));
document.getElementById('n3').addEventListener('click', () => setAnswer('exp', 5));

//function disable(question) {
//    const questionBlock = document.getElementById(`q${question.charAt(0)}`);
//    const buttons = questionBlock.querySelectorAll('.btns button');
//    buttons.forEach(button => {
//        button.disabled = true;
//   });
//}
function calculateAvg() {
    let total = rates.dec + rates.use + rates.exp;
    count = Object.values(rates).filter(rate => rate !== null).length;
    if (count === 3) {
        total /= count;
        document.getElementById('res').innerText = total.toFixed(2);
    }
}

function setAnswer(question, rate){
    rates[question] = rate;
    //disable(question);
    if (rates.dec !== null && rates.use !== null && rates.exp !== null) {
        calculateAvg();
    }
}


