/*import React from 'react'
import { Thickness, LevelAnnotationConfig, AnnotationType, Colors, LineType, GroupByType, PageFitMode, Enabled } from 'basicprimitives';
import {OrgDiagram} from 'basicprimitivesreact'
import config from '../helpers/config'
import styled from 'styled-components';

const MainDiagram = styled.div`
    width: 100vw;
    height: 100vh;
`

function Main() {

    

    return (
        <MainDiagram>
            <OrgDiagram centerOnCursor={true} config={config}>

            </OrgDiagram>
        </MainDiagram>

    )
}

export default Main
*/
import React, { Component } from 'react';
import { OrgDiagram, FamDiagram } from 'basicprimitivesreact';
import { Thickness, LevelAnnotationConfig, AnnotationType, Colors, LineType, GroupByType, PageFitMode, Enabled } from 'basicprimitives';
import {config} from '../helpers/config';
import styled from 'styled-components';

const MainDiagram = styled.div`
    width: 100vw;
    height: 100vh;
  //  background-color: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  background-image: radial-gradient( circle 680px at 0% 100%,  rgba(221,221,221,1) 0%, rgba(209,252,209,1) 100.3% );`
  function Main() {
 
    return <MainDiagram>
      
        <FamDiagram style={{backgroundImage: 
            'red'
            //'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'
            }} centerOnCursor={true} config={config} />
     
    </MainDiagram>
  
}

export default Main;