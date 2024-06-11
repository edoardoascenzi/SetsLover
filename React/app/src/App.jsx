import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import {useState} from 'react';
import ResultList from './components/ResultList';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import MusicPlayer from './components/MusicPlayer';
import {Song, FAKE_SONGS} from './components/modules.mjs'
import Button from 'react-bootstrap/Button';


function App() {
  const [searchQuery , setSearchQuery] = useState({source:'Youtube' , query: ''})
  const updateSearchQuery = (sq) => setSearchQuery(sq)

  const [songs, setSongs] = useState(FAKE_SONGS)
  const foundSongs = songs.length > 0 
  const clearSongs = () => setSongs([])

  
  // state that contains the currently playing song
  const [playingSong, setPlayingSong] = useState({})
  const clearPlayingSong = () => setPlayingSong({})
  const playSong = (song) => setPlayingSong(song)
  const isPlaying = Object.keys(playingSong).length > 0 //ture if a song is playing

  //####### queue and queue methods
  const [queue, setQueue] = useState([])

  const addToQueue = (song) => {
    setQueue(oldQueue => [...oldQueue, song])
  }
  // //tested ok
  // const shiftQueue = () => {
  //   if(queue.length > 0){
  //     setQueue(oldQueue => {
  //       oldQueue.shift()
  //       return [...oldQueue]
  //     })
  //   }
  // }
  //tested ok
  const clearQueue = () => {
    setQueue([])
  }
  //tested ok
  const removeElementFromQueue = (index) => {
    setQueue(oldQueue => {
      oldQueue.splice(index,1)
      return [...oldQueue]
  })
  }


  
  return (
    <>
    
    <Container>
      

      <Col   md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}  >
        <NavigationBar></NavigationBar>
        {isPlaying ? <MusicPlayer clearPlayingSong = {clearPlayingSong} playingSong={playingSong} playSong={playSong} queue={queue} removeElementFromQueue={removeElementFromQueue}></MusicPlayer> : <></>}
        {/* <MusicPlayer></MusicPlayer> */}
        <SearchBar searchQuery={searchQuery} updateSearchQuery={updateSearchQuery} clearSongs={clearSongs}></SearchBar>

        {foundSongs ? <ResultList songs={songs} playSong={playSong} addToQueue={addToQueue} ></ResultList> : <></>}
      </Col>
    </Container>
    </>
  )
}

export default App
