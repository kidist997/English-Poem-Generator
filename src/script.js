function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a03b08ef2bbd7f607a82ffef2t4o4bc4";
  let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
  let context =
    "you are a romantic poem expert and love to write short poems. your mission is to generate a 4 line poem in basic HTML and separate each line with <br>. make sure to follow user instructions below. do not include a title to the poem. sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and not at the beginning. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating an English poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);
