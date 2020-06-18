export function getBubbleSortAnimations(array)
{

	let animations = [];
	let auxArray = array.slice();

	const N = auxArray.length;

	for (var i = 0; i < N - 1; i++) {
	
		for(var j = 0 ; j < N - i - 1 ; j++){
			animations.push([j , j + 1]);
			animations.push([j , j + 1]);

			if(auxArray[j] > auxArray[j+1])
			{
				animations.push([j , auxArray[j+1]]);
				animations.push([j+1 , auxArray[j]])

				swap (auxArray , j , j + 1);
			}

			else{
				animations.push([-1,-1]);
				animations.push([-1,-1]);

			}	
		}
	}

	return [animations,auxArray];
}


function swap (array , i , j)
{
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}