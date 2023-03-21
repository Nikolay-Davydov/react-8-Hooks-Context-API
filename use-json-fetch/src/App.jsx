import './App.css'
import Error from './Components/Error';
import Loading from './Components/Loading';
import Success from './components/Success';


function App() { 

  return (
    <div className="App">
      <Error />
      <Loading />
      <Success />      
    </div>
  )
}

export default App
