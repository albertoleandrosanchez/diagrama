
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React,{useContext} from 'react'
import {MateriaContext} from '../context/MateriasProvider'
import styled from 'styled-components'
import { listArea,listaMateriasDelArea, aptoStyle,noAptoStyle} from '../helpers/helpers'
import Divider from '@material-ui/core/Divider';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { materias } from '../helpers/config'


const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding-top:4.5em;
    margin:0 3em;
    // background-color: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    background-color: #fdfbfb;
`

const StatGeneral = styled.div`
    display: flex;
    justify-content:space-between; 
    padding: 1em;
    width: 100%;
    `
const StatProggressCircles = styled.div`
    display: flex;
    justify-content:space-between; 
    padding: 1em;
    width: 100%;
    `




function Stats() {


    const [materiasCompletas, setMateriasCompletas] = useContext(MateriaContext);
   

  
   
    const hoursDoneOf_ = (IDarea,tHoursArea) => {
        return listaMateriasFaltantesDelArea_(IDarea).reduce(
            (tHoursArea, materia) => tHoursArea - materia.totalHours, tHoursArea);
    }
    

    const listaMateriasFaltantesDelArea_ = (IDarea) => listaMateriasDelArea(IDarea).filter( materia => !materiasCompletas.includes(materia.id))
    const listaMateriasHechasDelArea_ = (IDarea) => listaMateriasDelArea(IDarea).filter( materia => materiasCompletas.includes(materia.id))
    const listaMateriaHechasDeLaCarrera = materias.filter(materia => materiasCompletas.includes(materia.id))
    const listaMateriaFaltantesDeLaCarrera = materias.filter(materia => !materiasCompletas.includes(materia.id))
    const totalHoursDone = () =>listaMateriaHechasDeLaCarrera.reduce((hoursAcc, materia) => materia.totalHours + hoursAcc, 0)
    const totalHoursOfTheCarrer =() => materias.reduce((hoursAcc, materia) => materia.totalHours + hoursAcc, 0)
    
    const esAptoParaCursar = (materia) => 
         
         materia.children.every(child => (materiasCompletas.includes(child)))
         
    
    return (
        <StatContainer>
            <StatProggressCircles>
                <div style={{ width: 200, height: 200, }}>
                    <CircularProgressbarWithChildren 
                    value={listaMateriaHechasDeLaCarrera.length /materias.length*100} 
                        style={{ height: '1em'}}>
                        <span style={{fontSize:'1em', fontWeight:'700' }}>Materias Hechas</span>
                        {`${listaMateriaHechasDeLaCarrera.length} / ${materias.length}`}
                        <small className='fw-light text-muted'>{Math.round(listaMateriaHechasDeLaCarrera.length /materias.length*100)}% </small>
                    </CircularProgressbarWithChildren>
                </div>

                
                <div style={{ width: 200, height: 200, }}>
                    <CircularProgressbarWithChildren 
                    value={totalHoursDone() /totalHoursOfTheCarrer()*100} 
                        style={{ height: '1em'}}>
                        <span style={{fontSize:'1em', fontWeight:'700' }}>Horas Hechas</span>
                        {`${totalHoursDone()} / ${totalHoursOfTheCarrer()}`}
                        <small className='fw-light text-muted'>{Math.round(totalHoursDone() /totalHoursOfTheCarrer()*100)}% </small>
                    </CircularProgressbarWithChildren>
                </div>
        </StatProggressCircles>
        <StatGeneral >
        <div><p className='fw-bold fs-6 p-1'>
                Materias Faltantes
            </p>
            <Table size='small' className='border border-success'>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Horas</TableCell>
                        <TableCell>Cuatrimestre</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listaMateriaFaltantesDeLaCarrera.map(materia => {
                        return (
                            <TableRow style={ esAptoParaCursar(materia)? aptoStyle:noAptoStyle } key={materia.id}>
                                <TableCell>{materia.title}</TableCell>
                                <TableCell>{materia.totalHours}</TableCell>
                                <TableCell>{materia.cuatrimestre}</TableCell>
                            </TableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>
            </div>

        

           <div>
            <p className='fw-bold fs-6 text-center p-1'>
                Materias Completas
            </p>
            <Table size='small' className='border border-danger'>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Horas</TableCell>
                        <TableCell>Cuatrimestre</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listaMateriaHechasDeLaCarrera.map(materia => {
                        return (
                            <TableRow  key={materia.id}>
                                <TableCell> {materia.title}</TableCell>
                                <TableCell>{materia.totalHours}</TableCell>
                                <TableCell>{materia.cuatrimestre}</TableCell>
                            </TableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>
            </div>
            
        </StatGeneral>
        <Divider className='bg-dark m-3'  />

           <Table size="small" aria-label="a dense table">
           
            <TableHead >
                <TableRow >
                    <TableCell className='fw-bold'>
                        Area
                    </TableCell>
                    <TableCell className='fw-bold'>
                        Materias Hechas
                    </TableCell >
                    <TableCell className='fw-bold'>
                        Horas Hechas
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>


            {  
            listArea.map( (itemArea, index) => 
                <TableRow key={index}>
                    <TableCell>
                        {itemArea.name}
                    </TableCell>
                    <TableCell>
                        {
                        `${listaMateriasHechasDelArea_(itemArea.id).length} / ${listaMateriasDelArea(itemArea.id).length}`
                        }
                    </TableCell>
                    <TableCell>
                        {
                        `${hoursDoneOf_(itemArea.id,itemArea.totalAreaHours)} / ${itemArea.totalAreaHours}  `
                        }
                    </TableCell>
                </TableRow>
            )
            }

            </TableBody>

           </Table>
           
           

        </StatContainer>
    )
}

export default Stats
