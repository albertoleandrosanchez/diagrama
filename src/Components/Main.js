import React from 'react';
import {  FamDiagram } from 'basicprimitivesreact';
import {config} from '../helpers/config';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';



const MainDiagram = styled.div`
    width: 100vw;
    height: 100vh;
  //  background-color: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  background-image: radial-gradient( circle 680px at 0% 100%,  rgba(221,221,221,1) 0%, rgba(209,252,209,1) 100.3% );`
  function Main() {
 
    return <MainDiagram>
        <Button
        style={{ display: 'inline',position:'fixed', margin: '0px', zIndex: '1000', top: '0px', left: '0px' }}
        href="https://github.com/albertoleandrosanchez/diagrama"><i class="bi bi-github">  Repositorio</i></Button>
        <FamDiagram style={{backgroundImage: 
            'red'
            //'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'
            }} centerOnCursor={true} config={config} />
     
    </MainDiagram>
  
}

export default Main;