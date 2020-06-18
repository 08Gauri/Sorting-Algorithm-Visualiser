import React , {Component} from 'react';
import './SortingVisualiser.css';
import {getBubbleSortAnimations} from '../SortingAlgorithms/bubbleSort';

const ANIMATION_TIME = 1;
const NO_OF_ELEMENTS = 125;
export default class SortingVisualiser extends Component{

	constructor(props){
		super(props);

		this.state = {
			array : [],
		};
	}

	componentDidMount(){
		this.resetArray();
	}

	resetArray()
	{
		const array = [];
		for (var i = 0; i < NO_OF_ELEMENTS; i++) {
			array.push(randomInt(5,700));
		}

		this.setState({array});

	}


	bubbleSort()
	{
		const [animations,sortArray] = getBubbleSortAnimations(this.state.array);
		console.log(sortArray);

		for(let i = 0 ; i < animations.length; i++)
		{
			const isColorChange = (i % 4 === 0) || (i %4 === 1);

			const arrayBars = document.getElementsByClassName('array-bar');

			if(isColorChange === true){
				const color = (i %4 === 0) ? `red` : `lightblue`;

				const [i1,i2] = animations[i];

				setTimeout(() => {
					arrayBars[i1].style.backgroundColor = color;
					arrayBars[i2].style.backgroundColor = color;
				} , i * ANIMATION_TIME);
			}

			else
			{
				const[barIndex , newHeight] = animations[i];

				if(barIndex === -1){
					continue;
				}

				setTimeout(() => {
					arrayBars[barIndex].style.width = `${newHeight}px`;
				} , i * ANIMATION_TIME);
			}
		}

	}
	render(){
		const {array} = this.state;
		return (
		<div>	
			<button onClick = {() => this.resetArray()}>
				Generate new resetArray
			</button>

			<button onClick = {() => this.bubbleSort()}>
				Visualise bubble SortingVisualiser
			</button>		

			<div className = "array-container">

				{array.map((value,idx) => (
					<div 
						className ="array-bar"
						key = {idx}
						style = {{
							backgroundColor : `lightblue`,
							width : `${value}px`,
						}}>
					</div>
					))}

			</div>
		</div>				
			);

	}
}






function randomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}