document.getElementById("Save").addEventListener("click", () => {
   let input = document.getElementById("codeBox");
   let text = input.innerHTML;
   let substring = "let";
   let initialIndex = text.indexOf(substring);
   let allIndexe = [];
   let tempIndex=initialIndex;
   let index=initialIndex;
   if (initialIndex !== -1) {
      while (tempIndex !== -1) {
         allIndexe.push(tempIndex);
         tempIndex = text.indexOf(substring, tempIndex+ 1);
      }
      console.log(allIndexe);
      allIndexe.forEach(() => {
         let newText =
            text.substring(0, index) +
            '<span class="keyword">' +
            substring +
            "</span>" +
            text.substring(index + substring.length, text.length);
         console.log(newText);
         index = newText.indexOf(substring, index + substring.length+28);
         console.log('New Index:',index);
         input.innerHTML = newText;
         text = newText;
      });
   }
});
