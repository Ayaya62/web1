const btn = document.getElementById("buttonSend");
const myText = document.getElementById("newText");

btn.addEventListener("click", function () {
  const myInsertText = "Thank You for your response!! If you need some info please contact me on example@example.com";
  myText.innerHTML = myInsertText;
});

function takeAction() {
  alert("I'm Taking Action!!");
}

var linkElement = document.getElementById("changeText");
linkElement.addEventListener("click", function (event) {
  event.preventDefault(); // Menghentikan perilaku default dari tautan

  var pElement = document.getElementById("p1");
  var textareaElement = document.createElement("textarea");
  textareaElement.value = pElement.innerText;
  textareaElement.id = pElement.id;
  textareaElement.style.width = "300px";
  textareaElement.style.height = "150px";
  pElement.parentNode.replaceChild(textareaElement, pElement);

  var doneButton = document.createElement("button");
      doneButton.innerText = "Done";
      doneButton.addEventListener("click", function() {
        // Lakukan aksi yang diinginkan saat tombol "Done" ditekan
        var updatedText = textareaElement.value;
        console.log("Text has been updated:", updatedText);
      });

      buttonContainer.appendChild(doneButton);
});
