import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import React from 'react'
import { cardio } from 'ldrs'


function SearchList(prpos) {

cardio.register()

const handleSubmit = (event) => event.preventDefault();


    return <>
    <Form.Select value={prpos.searchQuery.source}
    onChange={e => prpos.methods.chooseSource(e.target.value)}>
        <option value="YouTube">YouTube</option>
        <option value="SoundCloud">SoundCloud</option>
    </Form.Select>

    {/* <CardioLoarder></CardioLoarder> */}

    <Form onSubmit={handleSubmit}>
        <Form.Label>{prpos.searchQuery.source} Search</Form.Label>
        <Form.Control
              type="text"
              placeholder="Search"
            />
      <Button type="submit">Search</Button>
    </Form>
    </>
    

}


function CardioLoarder() {
    cardio.register()

    return <l-cardio
    size="150"
    stroke="15"
    speed="1" 
    color="black" 
    ></l-cardio>

}





export default SearchList
