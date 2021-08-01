import React, {useState} from 'react'
import { Button,Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import {truncate, aptoStyle,noAptoStyle} from '../helpers/helpers'
import CompletedImg from '../assets/completed.png'
import { useContext } from 'react';
import { MateriaContext } from '../context/MateriasProvider';
import { useEffect } from 'react';


function MateriaCard({itemConfig}) {

    const imgStyle = {
        width: '100%',
        position: 'absolute',
        opacity: '0.5',
        top: '0',
        left: '0',
        zIndex: '1' 
        }


    const [materiasCompletas, setMateriasCompletas] = useContext(MateriaContext);
    useEffect(() => {
        //setmateMateriasCompletas from localstorage
        localStorage.setItem('materiasCompletas', JSON.stringify(materiasCompletas));
        
    }, [materiasCompletas])

    // add or quit a materia id from materiascompletas 
    const toggleMateriaId = (materiaId) => {
        if(!materiasCompletas.includes(materiaId)){
            setMateriasCompletas(prevState => [...prevState, materiaId])
        }else{
            setMateriasCompletas(materiasCompletas.filter(id => id !== materiaId))
        }
    }
    const esAptoParaCursar = () => itemConfig.children.every(child => (isCompleted(child))) && !materiasCompletas.includes(itemConfig.id);
    const backgroundEsAptoParaCursar = () =>{
        if(materiasCompletas.includes(itemConfig.id)){
            return '#5f5f5f8f'
        }

        if(esAptoParaCursar()){
            return '#95ff751c'
        }else{
            return '#ff747449'
        }
    };
    
    const isCompleted = (materiaId) => {
        return materiasCompletas.includes(materiaId)
    }

    return (
        <Card style={{ width: '100%', height: '100%' , borderColor: `${itemConfig.itemTitleColor}`,backgroundColor:`${backgroundEsAptoParaCursar()}`}}>
            {isCompleted(itemConfig.id) ? 
            <div>
                <img src={CompletedImg} style={imgStyle}/>
            </div>:null
            }
            <Card.Header className='fw-lighter text-wrap'>{truncate(`${itemConfig.cuatrimestre} Cuatrimestre`, 25)}</Card.Header>
            <Card.Body style={{ heigth: '100%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center' }} >
                <Card.Title style={{ height:'2em',textOverflow:'ellipsis'}} className='fw-bold '>{truncate(itemConfig.title,30)}</Card.Title>
                
                
            </Card.Body>
            <Card.Body className='ratingsContainer d-flex flex-row justify-content-center align-items-center p-1' >
             
                {/* <CircularProgressbarWithChildren  value={66}  > <i class="bi bi-heart-fill text-danger"></i> </CircularProgressbarWithChildren>
                 <CircularProgressbarWithChildren  value={66} ><i class="bi bi-hourglass-split text-success"></i></CircularProgressbarWithChildren>
                <CircularProgressbarWithChildren  value={66} ><i class="bi bi-book-half text-info"></i></CircularProgressbarWithChildren> 
                 */}
                </Card.Body>
                <Button 
                variant='success'
                size="sm" 
                href={itemConfig.url? itemConfig.url: 'https://informaticaunahur.github.io/'} 
                target="_blank"
                disabled={itemConfig.url? false: true}
                onClick={() => itemConfig.isVisible= false}
                >Mas Info
                </Button>
                <Button 
                variant={isCompleted(itemConfig.id)? 'outline-success' : 'outline-danger'} 
                onClick={()=>toggleMateriaId(itemConfig.id)}
               active={isCompleted(itemConfig.id)}
               >completada</Button>
        </Card>
    )   
}

export default MateriaCard
