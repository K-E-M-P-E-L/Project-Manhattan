import React from 'react'

const ProfilSendPenge = () => {
    return (
        <div className="ProfilSendPenge__main">
        <h2>Send penge</h2>

        <div className="ProfilSendPenge__bruger-id"> 
        <p>Bruger-id </p>
        <input type="number" placeholder="Bruger-id"/>
        </div>

        <div className="ProfilSendPenge__beloeb"> 
        <p>Beløb </p>
        <input type="number" placeholder="Beløb"/>
        </div>

        <button className="ProfilSendPenge__Send"> Send </button>

        </div>
    )
}

export default ProfilSendPenge
