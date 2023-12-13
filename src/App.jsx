import { useState, useReducer } from 'react'
import './App.css'
import Button from './components/Button'
import Child from './components/Child'
import Header from './components/Header'
import Main from './components/Main'
import MealsProvider from './providers/MealsProvider'
import ModeToggler from './components/ModeToggler'
import Sidebar from './components/Sidebar'
import MealsList from './components/MealsList'
import Counter from './components/Counter'
import { Link, Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import AboutMe from './AboutMe'
import ReactPlayer from 'react-player' //for videos

// import images 
import myImage from './assets/react.svg'

// we use useReducer and here we make the reducer (kind of useState with super powers)
const reducer = (state, action) => {
  if (action.type === 'ride') return {money: state.money + 10};
  if (action.type === 'fuel') return {money: state.money - 50};
  return new Error();
}

function App() {
  const [word, setWord] = useState('Eat');
  const initialState = {money: 100};
  const randomImageUrl = "https://picsum.photos/400/265";
  const vidUrl = "https://www.facebook.com/facebook/videos/10153231379946729/";

  // useReducer() gets a reducer and an initial State
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick() {
    setWord('Drink');
  }

  return (
    <>
      {/* React Router example */}
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/about-me">About Me</Link>
      </nav>
      <Routes>
        <Route path='/'  element={<Homepage />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
      {/* React Router example end */}

      {/* Ways of importing images */}
      <img height="100" src={myImage} alt="React Logo Image" /> 
      {/* <img height="50" src={require("./assets/react.svg")} alt="React Logo" /> */}
      <img height="100" src={randomImageUrl} alt="My random image" />
      {/* Ways of importing images end */}

      {/* Videos in React with react-player library example */}
      <ReactPlayer url={vidUrl} playing={false} volume={0.5} />
      {/* Videos in React with react-player library example end */}

      <Header name="Anna" color="purple" />
      <Main greet="Howdy" />
      <Sidebar greet="Hi" />
      <Button />
      <ModeToggler />

      <Child message={word + " at Little Lemon"} />
      <button onClick={handleClick}>Change text</button>


      {/* useReducer example */}
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: 'ride'})}>A new customer!</button>
        <button onClick={() => dispatch({type: 'fuel'})}>Refill the tank!</button>
      </div>
       {/* useReducer example end */}

      {/* Context API example */}
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
      {/* Context API example end */}
    </>
  )
}

export default App
