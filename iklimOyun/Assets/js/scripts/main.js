let  finishButton = document.getElementById("finishButton");

//add event listener to change card content
document.addEventListener("DOMContentLoaded", function(){
   let cards = document.getElementsByClassName("card");
   
   //
   for(let card of cards){
      let option = card.children[0];
      let result = card.children[1];

      card.addEventListener("click", function(){
         option.classList.add("hidden");
         option.classList.remove("shown");
         //
         result.classList.add("shown");
         result.classList.remove("hidden");
         //

      })
   }
   //finish game
   finishButton.addEventListener("click", function(){
      //
      play.classList.remove("shown");
      play.classList.add("hidden");
      //
      finish.classList.add("shown");
      finish.classList.remove("hidden");
      //
      
      let shownResultCards = document.getElementsByClassName("result shown");

      results.innerHTML = `TEBRİKLER  (${shownResultCards.length} / ${cards.length})`;
   })
})

