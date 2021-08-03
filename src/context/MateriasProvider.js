import React,{useEffect,useState, createContext} from 'react'

export const MateriaContext = createContext([]);
export const CarreraContext = createContext({})



function MateriaProvider({children}) {
    const [materiasCompletas, setMateriasCompletas] = useState([])
    //set materiasCompletas in localStorage
    
    const [actCarreer, setActCarreer] = useState('Tecnicatura')
    const toggleCarreer = () => {
        setActCarreer(actCarreer=='Tecnicatura'?'Licenciatura':'Tecnicatura')
    }
    useEffect(() => {
        setMateriasCompletas(JSON.parse(localStorage.getItem('materiasCompletas')) || [])
    }, [])
    

    return (
        <CarreraContext.Provider value={[actCarreer,setActCarreer],toggleCarreer}>
            <MateriaContext.Provider 
            value={
                [materiasCompletas,setMateriasCompletas]
            }
            >
                {children}
            </MateriaContext.Provider>
        </CarreraContext.Provider>
       
    )
}

export default MateriaProvider;