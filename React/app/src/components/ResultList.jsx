import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';

function ResultList (props) {

    return ( <>
    <ListGroup>
        <ListGroup.Item><VideoCard></VideoCard></ListGroup.Item>
        <ListGroup.Item><VideoCard></VideoCard></ListGroup.Item>
    </ListGroup>
    <Pages></Pages>
    


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

function VideoCard (props){

    return ( <>
        <Card >
        <Row>
            <Col>
                <Card.Img  rounded fluid variant="top" src="/icons8-music-record-cute-color-96.png" />
            </Col>
            <Col>
                <Card.Body>
                    <Card.Title>Video Title</Card.Title>
                    <Card.Text>Video Channel</Card.Text>
                    
                </Card.Body>
                <Stack gap={2}>
                <Col><Button variant="success">Play</Button></Col>
                <Col><Button variant="warning">Add to queue</Button> </Col>
                <Col><Button variant="info">Add to Playlist</Button></Col>
                </Stack>
                
            </Col>
          </Row>
        </Card>
    
        </>);

}


export default ResultList