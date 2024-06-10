import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import CloseButton from 'react-bootstrap/CloseButton';
import React, { useState, useRef, useEffect } from 'react';





function MusicPlayer(props) {

  



  return (
  <Container>
    <Card className="text-center">
    <CloseButton aria-label="Hide" onClick={props.clearPlayingSong}/>
      <Card.Img  src={props.playingSong.image} />
      {/* <Card.ImgOverlay> */}
      <Card.Body>
        <Card.Title>{props.playingSong.title}</Card.Title>
        <Card.Text>{props.playingSong.description}</Card.Text>

        <Controls song={props.playingSong}></Controls>

      </Card.Body>
      {/* </Card.ImgOverlay> */}

    </Card>
    </Container>
  );
}



function Controls(props) {
  //init as true to start the song after selected it from the result list
  const [isPlaying, setIsPlaying] = useState(true); 
  const audioRef = useRef(null); //reference to the audio
  const [progress, setProgress] = useState(0); //state of the progress bar
  const progressBarRef = useRef(null);
  const [repeat, setRepeat] = useState("")

  const handlePlayPause = () => {
    //set the audio reference state according the play/pause button pressiong
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipSeconds = () => {
    let skipInterval = 10
    if (audioRef.current.duration > (30*60)) skipInterval = 15
    audioRef.current.currentTime = audioRef.current.currentTime + skipInterval
    updateProgress()
  }

  const rewindSeconds = () => {
    let skipInterval = 10
    if (audioRef.current.duration > (30*60)) skipInterval = 15
    audioRef.current.currentTime = audioRef.current.currentTime - skipInterval
    updateProgress()
  }

  const repeatSingleSong = () => {
    if(repeat === "single") setRepeat("")
    else  setRepeat("single")
  }

  const handleEnded = () => {
    if (repeat === ""){
      audioRef.current.currentTime=0
      audioRef.current.pause();
      setIsPlaying(false)
    }
    else if(repeat === "single"){
      audioRef.current.currentTime=0
      audioRef.current.play();
      setIsPlaying(true)

    }
  }

  const handleProgressClick = (e) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const clickPosition = offsetX / rect.width;
    const newTime = clickPosition * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(clickPosition * 100);
  };

  const updateProgress = () => {
    // update the progress bar state
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((currentTime / duration) * 100);
  };

  useEffect(() => {
    // the effect with dependecies is need to call this effect every time the song chages
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [props.song.id]); 

  useEffect(() => {
    const interval = setInterval(() => {
      // if the audio is playing calls the updateProgress every 250ms
      if (audioRef.current) updateProgress();
        }, 250);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / (60*60))
    const minutes = Math.floor((time-(hours*60*60)) / 60 );
    const seconds = Math.floor((time-(hours*60*60)) % 60);
    return hours > 0 ? `${hours}:${minutes}:${seconds < 10 ? '0' : ''}${seconds}` : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  };
  

  return <>
  <Container>
  <Stack gap={3}>

  <audio ref={audioRef} src={props.song.music} onEnded={handleEnded} />

    <Row className="align-items-center">
      <Col xs="auto"  className="d-flex align-items-center">
      <span className='badge bg-secondary'>{audioRef.current ? formatTime(audioRef.current.currentTime) : formatTime(0)}</span>
      </Col>
      <Col ref={progressBarRef} onClick={handleProgressClick} style={{cursor : 'pointer'}}>
        <ProgressBar variant='secondary' animated  now={progress} />
      </Col>
      <Col xs="auto" className="d-flex align-items-center">
      <span className='badge bg-secondary'>{audioRef.current ? formatTime(audioRef.current.duration) : formatTime(0)}</span>
      </Col>
    </Row>


    <Row><Col>
    <Button variant='' disabled><i className="bi bi-shuffle"></i></Button>{" "}
    <Button variant='secondary' disabled><i className="bi bi-skip-start-fill"></i></Button>{" "}
    <Button variant='secondary' onClick={rewindSeconds}><i className="bi bi-arrow-counterclockwise"></i></Button>{" "}
    
    <Button variant='secondary' onClick={handlePlayPause} >
      {isPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
    </Button> {" "}

    <Button variant='secondary' onClick={skipSeconds}><i className="bi bi-arrow-clockwise"></i></Button>{" "}
    <Button variant='secondary' disabled ><i className="bi bi-skip-end-fill"></i></Button>{" "}
    <Button variant='secondary' disabled><i className="bi bi-repeat"></i></Button>{" "}

    <Button variant='secondary' onClick={repeatSingleSong}>
      {repeat === "single" ? <i style={{color:"blue"}} className="bi bi-repeat-1"></i> : <i className="bi bi-repeat-1"></i>}
    </Button>
    
    </Col></Row>
    <Row><Col>
    <Button variant="secondary">Add to Playlist</Button> {" "}
    <Button variant="danger">Clear Queue</Button>
    </Col></Row>
    
  </Stack>
  </Container>
  </>
  
}

export default MusicPlayer;

/*
TODO:
- auto play when tou press play on the result
*/