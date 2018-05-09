/*var evenNo=[];var oddNo=[];
for(i=1;i<100;i++){
    if((i%2)===0){evenNo[evenNo.length]=i;}
    else{oddNo[oddNo.length]=i;}
}
console.log(evenNo);
console.log(oddNo);*/

/*var age=10;
console.log("Age: "+age);
result(age);
function result(x){
if(x>=0&&x<=9){console.log("Young");}
else if(x>=10&&x<=17){console.log("Young adult");}
else if(x>=18&&x<=40){console.log("Youth");}
else if(x>=41){console.log("Dude you're grown");}
else{console.log("You're an alien");}
}*/
var num=4;
var output="";
var space=" ";
var astar="*";
for (i=1; i<num; i++){
  for (r=1; r<i; r++){output+=space;}
  output+=output+astar;
  console.log(output);
}

