let inputArea = document.getElementById("codeBox");
// let word = "";
inputArea.addEventListener("input", () => {
   let selected = window.getSelection();
   console.log(selected);
   let range=document.createRange()
   range.setEnd(inputArea,2)
   range.collapse(false)

   console.log(range);

   //    let userText = inputArea.innerHTML;
   //    let spaceIndex = userText.lastIndexOf(" ");
   //    if (spaceIndex !== -1) {
   //       word = userText.substring(spaceIndex + 1, userText.length);
   //    } else {
   //       word = userText;
   //    }
   //    if (word === "let") {
   //       let indexOfWord = userText.lastIndexOf(word);
   //       let newHTML =
   //          userText.substring(0, indexOfWord) + `<span class="keyword">` + word + `</span>` + " ";
   //       inputArea.innerHTML = newHTML;
   //       spaceIndex = newHTML.lastIndexOf(" ");

   //    }
});
