import React, { useState } from 'react'

const Dashboard = () => {
    //aqui vai javaScript
    const [contador, setContador] = useState(0)
    const [visivel, setVisivel] = useState(false)

    return(
        <>
            <h1>Dashboard</h1>
            <button 

                className={visivel ? 'active' : ' '}
                onClick={()=> {
                    setContador(contador + 1)
                    setVisivel(!visivel)
                }}
                >
                    incrementar {contador}
                </button>
        </>
    );
}

export default Dashboard;