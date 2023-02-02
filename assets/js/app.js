/* Code Jquery pour le drag and drop*/
$(document).ready(function() {
    $(".drag-item").draggable({
      cursor: "pointer",
      revert: "invalid"
    });
    $(".mots-noms").draggable({
        cursor: "pointer",
        revert: "invalid"
      });

    $(".drop-zone").droppable({
        accept: ".drag-item",

        drop: function(event, ui) {

          var $this = $(this);

          ui.draggable.position({
            my: "center",
            at: "center",
            of: $this,
            using: function(pos) {
              $(this).animate(pos, 200, "linear");
            }
          })
          
        },
      });

      $(".drop-zone fem").droppable({
        accept: ".drag-item det-fem",

        drop: function(event, ui) {

          var $this = $(this);

          ui.draggable.position({
            my: "center",
            at: "center",
            of: $this,
            using: function(pos) {
              $(this).animate(pos, 200, "linear");
            }
          })
          
        },
      });
  
  });



  /* ---------Code JS exercice 2---------*/

  var motsNom = [
    "lion",
    "chat",
    "avion",
    "vélo",
    "voiture",
    "chaise",
    "école",
    "parapluie",
    "livre",
    "ballon",
    "crayon",
    "gomme",
    "maison"
  ];

  var motsDet = [
    "le",
    "une",
    "la",
    "un",
    "les",
    "des"
  ];

  var motsAdj = [
    "grand",
    "noir",
    "beau",
    "joli",
    "petit",
    "gentille",
    "curieuse",
    "rapide",
    "ponctuel",
    "fort"
  ];

  function getRandomWord(motsNom,motsDet,motsAdj){
    const listMots = [motsNom,motsDet,motsAdj];
    const randomIndex = listMots[Math.floor(Math.random() * listMots.length)] ;
    const randomMots = randomIndex[Math.floor(Math.random() * randomIndex.length)];
    return randomMots;
  }

  document.querySelector("#btn-noms").addEventListener("click", function(){
    //sélectionner un mot aléatoire
    var randomWord = getRandomWord(motsNom,motsDet,motsAdj);

    //associer le mot aléatoire au placeholder
    var targetNom = document.querySelector("#targetNom");
    targetNom.textContent = randomWord;

  })

  // boutton refresh recommencer
  const refreshButton = document.getElementById("refresh-button");


    refreshButton.addEventListener("click", function() {
    location.reload();
    
    });
  
/*--------Jquery exercice 2-------------*/

  $(document).ready(function() {
    const motPresent = [motsAdj, motsDet, motsNom];

    $(".mots-hasard").draggable({
        cursor: "pointer",
        revert: "invalid",
        helper: "clone"
    });
  
    $(".drop-item2").droppable({
        accept: ".mots-hasard",
      drop: function(event, ui) {
        $(this).append($(ui.draggable).clone());
      }
    });

  });

/*-------------exercice genre et nombre-----------*/

//forcer utilisateur à remplir tout les champs

function checkAllAnswers(){
    var nbError = 0;
    const allAnswers = document.querySelectorAll("#naturePhrase")
    for (var i = 0; i <allAnswers.length; i++){
        if (allAnswers[i].value == 0){
            nbError ++;
        }
    }
    if (nbError > 0){
        alert("Merci de remplir tous les champs !")
    }
    else {
        return true;
    }
}

var correctAnswers = ["2","3", "1", "2","4"]

function checkCorrectAnswers(){
    var score = 0;
    if (checkAllAnswers()){
        const allAnswers = document.querySelectorAll("#naturePhrase")
        for (var i = 0; i< allAnswers.length; i++){
            if(allAnswers[i].value == correctAnswers[i]){
                allAnswers[i].style.backgroundColor = "green";
                score ++
            }
            else {allAnswers[i].style.backgroundColor="red"}
        }
    }
    document.getElementById("btn-recommencer").style.display = "block";
}


document.getElementById("btn-recommencer").onclick = function() {
    const allAnswers = document.querySelectorAll("#naturePhrase");
    for (var i = 0; i < allAnswers.length; i++) {
        allAnswers[i].value = 0;
        allAnswers[i].style.backgroundColor = "";
    }
    document.getElementById("btn-recommencer").style.display = "none";
};
/*document.getElementById("btn-recommencer").onclick = function() {
    location.reload();
  };*/
