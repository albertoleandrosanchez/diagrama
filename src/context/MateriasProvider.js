import React,{useEffect,useState, createContext} from 'react'

export const MateriaContext = createContext([]);

function MateriaProvider({children}) {
    const [materiasCompletas, setMateriasCompletas] = useState([])
    //set materiasCompletas in localStorage
    useEffect(() => {
        setMateriasCompletas(JSON.parse(localStorage.getItem('materiasCompletas')) || [])
    }, [])
    

    return (
            <MateriaContext.Provider 
            value={
                [materiasCompletas,setMateriasCompletas]
            }
            >
                {children}
            </MateriaContext.Provider>
       
    )
}

export default MateriaProvider;