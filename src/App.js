
import './App.css';

import Countries from './components/Countries/Countries';
function App() {
  return (
    <div className="App">
        <Countries />
    </div>
  );
}

// function  LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
// return(
//   <div>
//     <h1>Countries</h1>
//     <h3>avilable countris:{countries.length}</h3>
//     {
//       countries.map(country => <Country name={country.name.common} capital={country.capital} ></Country>)
//     }
//   </div>
// )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name:{props.name}</h2>
//       <h4>Capital:{props.capital}</h4>
//     </div>
//   )
// }

export default App;
