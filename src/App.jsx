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
import UserProvider, { useUser } from './providers/UserContext'

// we use useReducer and here we make the reducer (kind of useState with super powers)
const reducer = (state, action) => {
  if (action.type === 'ride') return {money: state.money + 10};
  if (action.type === 'fuel') return {money: state.money - 50};
  return new Error();
}

// lists
const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00"
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$3.50"
  },
  {
    id: "3",
    title: "Chocolate mousse",
    description: "Unexplored flavour",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00"
  }
];

const LoggedInUser = () => {
  // get the context data from UserContext
  const {user} = useUser();

  return (
    <p>
      Hello <span>{user.name}</span>
    </p>
  )
};

const HeaderNew = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  )
};

const Page = () => {
  // get the context data from UserContext
  const {user} = useUser();

  return (
    <div>
      <h2>What is lorem ipsum?</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Written by: {user.name}</p>
    </div>
  )
};

function App() {
  const [word, setWord] = useState('Eat');
  const [name, setName] = useState('');
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState('');

  const initialState = {money: 100};
  const randomImageUrl = "https://picsum.photos/400/265";
  const vidUrl = "https://www.facebook.com/facebook/videos/10153231379946729/";

  // useReducer() gets a reducer and an initial State
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick() {
    setWord('Drink');
  }

  const topDesserts = data.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.description}`;
    return <li key={dessert.id}>{itemText} - {dessert.price}</li>
  })

  function handleSubmit(e) {
    e.preventDefault();
    setName('');
    console.log('Submitted');
  }

  function handleSubmitComment(e) {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }
    
    console.log("Form submitted!");
    setComment("");
    setScore(10);
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

      <hr />
      {/* lists */}
      <h2>Top Desserts</h2>
      <ul>{topDesserts}</ul>
      <hr />
      {/* lists end */}

      {/* forms in React */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className='Field'>
            <label htmlFor='name'>Name:</label>
            <input 
              id="name"
              type="text" 
              placeholder="Name" 
              name="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>

      <hr />
      <form onSubmit={handleSubmitComment}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className='Field'>
            <label htmlFor="score">Score: {score} ⭐</label>
            <input 
              type="range" 
              name="score" 
              id="score" 
              min="0" 
              max="10" 
              value={score} 
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className='Field'>
            <label>Comment:</label>
            <textarea 
              name="" 
              id="" 
              cols="30" 
              rows="5" 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      {/* forms in React end */}

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

      <hr />
      <UserProvider>
        <HeaderNew />
        <Page />
      </UserProvider>

      {/* Context API example end */}
    </>
  )
}

export default App
