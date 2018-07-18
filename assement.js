var word="bruno";//create the input word variable
var splitword=[];//creating an array to hold the characters of the variable
checker();//calling the checker function
function checker(){
	for (var i = 0; i < word.length; i++) {//this is to split the word input to letters and store each character in the array
		splitword[splitword.length]=word.charAt(i);
	}
	console.log(splitword);//display the array in the console
	for (var i = 0; i < splitword.length; i++) {//this is to loop through all the characters of the word and check if any similar character exists
		for (var r = 0; r < splitword.length; r++) {
			//console.log("splitword i = "+splitword[i]);console.log("splitword r = "+splitword[r]);
			if(splitword[i]==splitword[r] && i!=r){//
				console.log("Non isogram");//print non isogram if a the character at splitword[i] is the same as splitword[r]
				r=splitword.length;i=splitword.length;
			}
			else {
				if(i==(splitword.length-1)){
					console.log("Isogram");//print isogram if a the character at splitword[i] is the same as splitword[r]
				}
			}
		}
	}
}