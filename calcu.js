const result = document.getElementById('display')

function simplify(n) {
    result.value = result.value + n
}

function clr() {
    result.value = ""
}

function del() { result.value = result.value.slice(0, -1) }

function perc() { result.value = result.value / 100 }

function answer() {

    try { result.value = eval(result.value) } catch (error) { result.value = "undefined" }
}