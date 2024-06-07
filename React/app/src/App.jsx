import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavigationBar from './components/NavigationBar';
import SearchList from './components/SearchList';
import {useState} from 'react';


function App() {
  const [searchQuery , setSearchQuery] = useState({source:'Youtube' , query: ''})
  const chooseSource = (s) => setSearchQuery(oldSearchQuery => { return {...oldSearchQuery, source:s} })
  
  return (
    <>
    <NavigationBar></NavigationBar>
    <SearchList searchQuery={searchQuery} methods={{chooseSource:chooseSource}}></SearchList>
    <h1>Ciaooo</h1>
    </>
  )
}

export default App
