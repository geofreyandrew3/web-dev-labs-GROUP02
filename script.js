document.getElementById("calcBtn").addEventListener("click",calculateGrade);
function calculateGrade(){
    let score=document.getElementById("scoreInput").value;



if(score<0||score>100||score===""){
    document.getElementById("results").textContent="Enter score btn 0 to 100";
    return;
}

let grade;
if(score>=70){
    grade="A";
}
else if(score>=60){
    grade="B";
}
else if(score>=50){
    grade="C";
}
else if(score>=40){
    grade="D";
}
else{
    grade="F";
}

document.getElementById("results").innerHTML="score:"+score+"<br>grade:"+grade;
document.getElementById("scoreInput").value="";
}