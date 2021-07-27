import React from 'react'
import { Button,Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function MateriaCard({itemConfig}) {
    return (
        <Card style={{ width: '100%', height: '100%' , borderColor: `${itemConfig.itemTitleColor}`}} >
            <Card.Header className='fw-lighter text-wrap'>{itemConfig.cuatrimestre}</Card.Header>
            <Card.Body style={{ heigth: '100%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center' }} >
                <Card.Title className='fw-bold '>{itemConfig.title}</Card.Title>
           
                <Button 
                variant='success'
                size="sm" 
                href={itemConfig.url? itemConfig.url: 'https://informaticaunahur.github.io/'} 
                target="_blank"
                disabled={itemConfig.url? false: true}
                >Mas Info</Button>
           
            </Card.Body>
        </Card>
    )   
}

export default MateriaCard
