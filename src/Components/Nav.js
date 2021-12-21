import { Button } from '@material-ui/core';
import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import {getActualCarrer,toggleActualCarrer} from '../helpers/helpers'

const styleNav = {
    position: 'sticky',
    top: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    padding: '0.4em',
    borderBottom: '1px solid #000',
    backgroundColor: '#adffba',
}

function Nav() {
    const [actualCarrer, setActualCarrer] = useState(localStorage.getItem('actualCarrer'));
    useEffect(() => {
        setActualCarrer(getActualCarrer());
    }, [actualCarrer])
    return (
        <div style={styleNav} className="navbar sticky-top navbar-light bg-light" >
            <Link to='/' className='text-decoration-none'><Button className='m-1 '  variant="contained" color="primary" ><i className="bi bi-person-circle">  Progreso</i></Button></Link>
            <Link to='/diagram' className='text-decoration-none'><Button className='m-1'  variant="contained" color="secondary"><i className="bi bi-newspaper">  Diagrama</i></Button></Link>
            <Button className='m-1' variant="outlined" color="primary" href="https://github.com/albertoleandrosanchez/diagrama" target='blank'><i className="bi bi-github">  Repo</i></Button>
            {/*<Button className='m-1' variant="outlined" color="primary" disabled> <i className="bi bi-question-circle-fill"> Guia</i></Button>
            <Button onClick={()=>toggleActualCarrer()}>{getActualCarrer()}</Button>*/}
       </div>
    )
}

export default Nav
