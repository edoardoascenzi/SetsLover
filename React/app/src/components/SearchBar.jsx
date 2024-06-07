import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import React from 'react'
import { cardio } from 'ldrs'
import {useState} from 'react';



function SearchBar(prpos) {

    const [source, setSource] = useState(prpos.searchQuery ? prpos.searchQuery.source : 'Youtube')
    const [query, setQuery] = useState(prpos.searchQuery ? prpos.searchQuery.query : '')

    // This state is used to handle error messages
    const [errors, setErrors] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();

        if(query === ''){
            setErrors(oldErrors => [...oldErrors , {query:"Search empty"}])
            return
        }

        setErrors([]);  // cleaning error array
        setQuery(query.trim()) // trim() is used for removing leading and ending whitespaces

        prpos.updateSearchQuery({source:source , query:query})
        
        setQuery('')
    }


    return <>
    

    {/* <CardioLoarder></CardioLoarder> */}

    <Form onSubmit={handleSubmit} >
        <Form.Group className='mb-4'>
            <Form.Select value={source}
            onChange={e => setSource(e.target.value)}>
                <option value="YouTube">YouTube</option>
                <option value="SoundCloud">SoundCloud</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className='mb-4'>
        <Form.Label>{source} Search</Form.Label>
        <Form.Control className={errors.query ? 'wrong-field' : ''} type="text" placeholder="Search" required={true} onChange={e => setQuery(e.target.value)} value={query}/>
        </Form.Group>

        <Form.Group className='mb-4'>
        <Button type="submit">Search</Button>
        </Form.Group>
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





export default SearchBar
