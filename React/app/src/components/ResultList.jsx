import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/esm/Container';


function ResultList (props) {



    return ( <>
    <Container>
    <ListGroup>
        {props.songs.map((song) =><ListGroup.Item key={song.id}><ResultCard song ={song} playSong={props.playSong}></ResultCard></ListGroup.Item>)}
    </ListGroup>
    {/* <Pages></Pages> */}
    </Container>


    </>);

}


function ResultCard (props){

    return ( <>
        <Card className='mt-2 mb-2'>
        <Row className='mt-2 mb-2 mx-auto'>
            <Col >
                <Card.Img variant="top" src={props.song.image} />
            </Col>
            <Col>
                <Card.Body >
                    <Card.Title>{props.song.title}</Card.Title>
                    <Card.Text>{props.song.description}</Card.Text>
                </Card.Body>
                <Stack direction='horizontal' gap={2} >
                <Button variant="success" onClick={() => props.playSong(props.song)}><i className="bi bi-play-fill"></i></Button>
                <Button variant="warning"><i className="bi bi-clock"></i></Button> 
                <Button variant="info"><i className="bi bi-music-note-list"></i></Button>
                </Stack>
            </Col>       
          </Row>
        </Card>
    
        </>);

}

function Pages () {
    return (
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
    
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>
    
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      );
}


export default ResultList