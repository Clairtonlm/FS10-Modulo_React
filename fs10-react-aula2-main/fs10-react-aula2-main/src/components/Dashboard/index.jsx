import React, { useState } from 'react'

const Dashboard = () => {
    //aqui vai javaScript
    const [contador, setContador] = useState(0)
    return(
        <>
            <h1>Dashboard</h1>
            <button onClick={()=> setContador(contador +1)}>incrementar{contador}</button>
        </>
    );
}

export default Dashboard;