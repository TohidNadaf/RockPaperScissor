let arr=["rock","paper","scissor"];
let computer =arr[Math.floor(Math.random()*arr.length)]

let user=window.prompt("select your choice (rock,paper,scissor)");
user=user.toLowerCase()
let r="rock"; let s="scissor"; let p="paper";
document.write("computer is ",computer)
document.write("<br><br>");

document.write("user is ",user);
document.write("<br><br>");

if(computer==user)
{
    document.write("tie");
}
else if(computer=="rock" && user=="paper")
{
    document.write("user is winner");
}
else if(computer=="paper" && user=="rock")
{
    document.write("computer is winner");
}
else if(computer=="scissor" && user=="paper")
{
    document.write("computer is winner");
}
else if(computer=="paper" && user=="scissor")
{
    document.write("user is winner");
}
else if(computer=="rock" && user=="scissor")
{
    document.write("computer is winner");
}
else if(computer=="scissor" && user=="rock")
{
    document.write("user is winner");
}
else {
    document.write("invalid selection");
}