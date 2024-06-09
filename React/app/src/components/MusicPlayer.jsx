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
      <Card.Img variant="top" src={props.playingSong.image} />
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateProgress = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((currentTime / duration) * 100);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [props.song.id]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        updateProgress();
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);
  

  return <>
  <Container>
  <Stack gap={3}>
  <audio ref={audioRef} src={props.song.music} />
  <ProgressBar variant='secondary' animated  now={progress}/>
    <Row><Col>
    <Button variant=''><i className="bi bi-shuffle"></i></Button>{" "}
    <Button variant='secondary'><i className="bi bi-skip-start-fill"></i></Button>{" "}
    <Button variant='secondary'><i className="bi bi-arrow-counterclockwise"></i></Button>{" "}
    <Button variant='secondary' onClick={handlePlayPause} >
      {isPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
    </Button> {" "}
    <Button variant='secondary'><i className="bi bi-arrow-clockwise"></i></Button>{" "}
    <Button variant='secondary'><i className="bi bi-skip-end-fill"></i></Button>{" "}
    <Button variant='secondary'><i className="bi bi-repeat"></i></Button>{" "}
    <Button variant='secondary'><i className="bi bi-repeat-1"></i></Button>
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