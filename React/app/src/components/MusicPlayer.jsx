import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';



function MusicPlayer() {
  return (
  <Container>
    <Card className="text-center">
    
      <Card.Img variant="top" src="/icons8-music-record-cute-color-96.png" />
      {/* <Card.ImgOverlay> */}
      <Card.Body>
        <Card.Title>Video Title</Card.Title>
        <Card.Text>Channel Name</Card.Text>

        <Controls></Controls>

      </Card.Body>
      {/* </Card.ImgOverlay> */}

    </Card>
    </Container>
  );
}



function Controls() {
  return <>
  <Stack gap={3}>
  <ProgressBar variant='secondary' animated now={45} />
    <Row><Col>
    <Button variant=''><i class="bi bi-shuffle"></i></Button>{" "}
    <Button variant='secondary'><i class="bi bi-skip-start-fill"></i></Button>{" "}
    <Button variant='secondary'><i class="bi bi-arrow-counterclockwise"></i></Button>{" "}
    <Button variant='secondary'><i class="bi bi-play-fill"></i></Button> {" "}
    <Button variant='secondary'><i class="bi bi-pause-fill"></i></Button>{" "}
    <Button variant='secondary'><i class="bi bi-arrow-clockwise"></i></Button>{" "}
    <Button variant='secondary'><i class="bi bi-skip-end-fill"></i></Button>{" "}
    <Button variant='secondary'><i class="bi bi-repeat"></i></Button>{" "}
    <Button variant='secondary'><i class="bi bi-repeat-1"></i></Button>
    </Col></Row>
    <Row><Col>
    <Button variant="secondary">Add to Playlist</Button>
    </Col></Row>
    
  </Stack>
  </>
  
}

export default MusicPlayer;