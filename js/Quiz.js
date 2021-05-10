class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide()

    //write code to change the background color here
background("black")
    //write code to show a heading for showing the result of Quiz
text("quizz app",100,120)
    //call getContestantInfo( ) here
Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not u
    if (allContestants !==undefined){
    fill("blue")
    textSize(20)
    text("conteaten who anwser correct are heighlighted in green",140,140)
    }
    //write code to add a note here
for (var plr in allContestants){
  var correctAns="2";var y=200;var x=200
  if (correctAns===allContestants[plr].answer)
  fill("green")
  else
  fill("red")
  text(allContestants[plr].name,x,y)
  y=y+100
  x=x+100
}
    //write code to highlight contest who answered correctly
   
  }

}
