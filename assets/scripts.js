var goal;
var score;
var wins=-1;
var losses=0;
$(".losses").text("Losses: " + losses);

var reset = function(){
if (score < goal){
    
}
else{
    if(score===goal){
        wins++;
        $(".wins").text("Wins: " + wins);    }
    else{
        losses++;
        $(".losses").text("Losses: " + losses);
    }
    score = 0;
    $(".score").text(score);
    goal = Math.floor(Math.random()*101 + 19);
    $(".goal").text("Goal: " + goal);
    $("#Amethyst").attr("value", Math.floor(Math.random()*12 + 1));
    $("#Sapphire").attr("value", Math.floor(Math.random()*12 + 1));
    $("#Gold").attr("value", Math.floor(Math.random()*12 + 1));
    $("#Emerald").attr("value", Math.floor(Math.random()*12 + 1));
};};

$(".crystals").on("click",function(){
    score += parseInt($(this).val());
    $(".score").text(score);
    reset();
});

reset();