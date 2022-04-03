// CREATE ADVICE CARD
let advice = document.querySelector(".advice");
let spanId = document.querySelector("span");
let q = document.querySelector("q");
let button = document.querySelector("button");

// OPTIONS
const options = {
  method: "GET",
  headers: {
    "Accept-Encoding": "application/json",
  },
};

// FETCH DATA USING API
async function fetchAdvices() {
  try {
    let response = await fetch("https://api.adviceslip.com/advice", options);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

// RENDER ADVICE
async function renderAdv() {
  let adviceInfo = await fetchAdvices();
  console.log(adviceInfo);
  spanId.textContent = `ADVICE # ${adviceInfo.slip.id}`;
  q.textContent = `${adviceInfo.slip.advice}`;
  advice.prepend(spanId, q);
}

renderAdv();
// CHANGE ADVICE
button.addEventListener("click", () => {
  renderAdv();
});
