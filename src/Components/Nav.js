import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const styleNav = {
    display: 'flex',
    position:'absolute',
    width: '100%',
    padding: '0.4em',
    borderBottom: '1px solid #000',
    backgroundColor: '#adffba',

}

function Nav() {
    return (
        <div style={styleNav}>
            <Link to='/'><Button className='m-1'><i class="bi bi-github">  HOME</i></Button></Link>
            <Link to='/diagram'><Button className='m-1'><i class="bi bi-github">  Diagrama</i></Button></Link>
            <Button className='m-1' href="https://github.com/albertoleandrosanchez/diagrama" target='blank'><i class="bi bi-github">  Repo</i></Button>
            <Button className='m-1'> <i class="bi bi-question-circle-fill"> Guia</i></Button>
        </div>
    )
}

export default Nav
