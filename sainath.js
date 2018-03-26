console.log("hello world0");
var yargs=require('yargs');
let userInput=yargs.argv._[0],str='Number is at index ',check=false;
var _=require('lodash');
let array=[2,3,5,2,24,2];
// //_.forEach([1, 2,'s','sgf',2], function(value) {
//   console.log(value);
// });
//console.log(isNaN(userInput));
if(isNaN(userInput))
{
	console.log("invalid input");
}
else{
		if(_.isNumber(userInput))
		{
			_.forEach(array, function(value,index) {
		   if(userInput==value){
			str=str+index+' ';
			check=true;
		   }
		 });
			 if(check==false)
		{
			str=userInput +" is not there in array";
		}
		}
		
		
			console.log(str);
		

}
