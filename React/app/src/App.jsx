import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import {useState} from 'react';
import ResultList from './components/ResultList';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import MusicPlayer from './components/MusicPlayer';


function App() {
  const [searchQuery , setSearchQuery] = useState({source:'Youtube' , query: ''})
  const updateSearchQuery = (sq) =>
    {
      setSearchQuery(sq)
    }
  const chooseSource = (s) => setSearchQuery(oldSearchQuery => { return {...oldSearchQuery, source:s} })
  
  return (
    <>
    
    <Container>
      <Col   md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}  >
        <NavigationBar></NavigationBar>

        <MusicPlayer></MusicPlayer>

        <SearchBar searchQuery={searchQuery} updateSearchQuery={updateSearchQuery}></SearchBar>
        <h1>{searchQuery.query}</h1>

        <ResultList></ResultList>
      </Col>
    </Container>
    </>
  )
}

export default App
