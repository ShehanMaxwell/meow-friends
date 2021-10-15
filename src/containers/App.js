import React, {  useState, useEffect } from 'react'; /* Hooks = useState , useEffect */
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'; 
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'; 
import './App.css';


function App () {
	/* constructor(){
		super()
		this.state = {
			robots:[],
	        searchfield: '' 
		}
		
	} */ 


	/* Using hooks */
	const [robots, setRobots] = useState([]) 
	const [searchfield, setSearchfield] =  useState('') 
	/* const [count, setCount] = useState(0) */

	/* componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({ robots: users }));
	

	} */

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => {setRobots ( users )});
		/* 	console.log(count) //only run if count changes */
			
			
	}, [/* count */] )

	const onSearchChange = (event) => {
		setSearchfield(event.target.value )

	}  

		
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		
		if(!robots.length){

			return( 
				<div className='f1 tc'>
				<h1> Loading.... </h1>
				</div>
				)
			
		} else {

			return (
			<div className='tc'>
			<h1 className='f1'>Meow Friends</h1>
			{/* <button onClick={()=>setCount(count+1)}>Click Me</button> */}
			

			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundry>
			<CardList robots= {filteredRobots} />
				</ErrorBoundry>
			</Scroll>
			</div>
			);
	}
}

	



export default App; 