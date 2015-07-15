var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

// name, employee number, annual salary, review rating.


/*newArray = arrayAtticus.slice();
newArray += arrayJem.slice();
newArray += arrayBoo.slice();
newArray += arrayScout.slice();

newArray.push(arrayAtticus);
newArray.push(arrayJem);
newArray.push(arrayBoo);
newArray.push(arrayScout);
*/

var newArray  = [];

function stiFunction (array) {
	
	
	newArray.push(array[0]);
	//console.log(newArray);
	var sti = 0;
	switch(array[3]) {
		case 5:
			sti = .1;
		break;
		case 4:
			sti = .06;
		break;
		case 3:
			sti = .04;
		break;
		default:
		case 2:
			sti = 0;
		break;

	}
	console.log("Here is sti" + sti);
	if(array[1].length == 4){
		console.log("the array length" + array[1].length);
		sti = sti + .05;
	}
	console.log("Second Step" + sti);
	if(array[2] > 65000){
		sti = sti - .01;
	}
	console.log("Third Step" + sti);
	if(sti > .13){
		sti = .13; 
	}
	array[1] = parseInt(array[1]);
	array[2] = parseInt(array[2]);
	console.log("Here it is now" + sti);
	newArray.push(sti);


	newArray.push(array[2]+ (array[2] * sti));  
	newArray.push(Math.round(sti * array[2]));

	console.log(sti);
	}

stiFunction(arrayAtticus);
stiFunction(arrayBoo);
stiFunction(arrayJem);
stiFunction(arrayScout);
/*stiFunction(arrayBoo);
stiFunction(arrayJem);*/
console.log(newArray);



/*switch(array[3]) {
		case 5:
			sti = array[2]*.1;
		break;
		case 4:
			sti = array[2]*.06;
		break;
		case 3:
			sti = array[2]*.04;
		break;
		default:
		case 2:
			sti = 0;
		break;




*/