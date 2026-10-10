let res = document.getElementById("result");

function add(val) {
  res.value = res.value + val; 
}

function clearAll() {
  res.value = "";
}

function calculate() {
  res.value = eval(res.value);
}