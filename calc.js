const result = document.getElementById('resultText')

function calculate(n) {
    result.value = result.value + n;
}

function clr() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0, -1)
}

function answer() {
    try {
        result.value = eval(result.value)
    } catch (error) {
        result.value = "undefined"
    }
}