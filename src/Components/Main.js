import React, {useState} from 'react';
import {  FamDiagram } from 'basicprimitivesreact';
import {config} from '../helpers/config';
import styled from 'styled-components';




const MainDiagram = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top:4em;
  //  background-color: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  background-image: transparent;
  `
  
  function Main() {
 
    return <MainDiagram>
        
        <FamDiagram style={{backgroundImage:'red',height:'100%'
            //'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'
            }} 
            centerOnCursor={true} 
            config={config} 
            
            
            />
     
    </MainDiagram>
  
}

export default Main;