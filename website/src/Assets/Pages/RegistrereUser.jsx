import React from 'react'
import Registrere from "../Components/RegistrereU"

const RegistrereUser = () => {

    let userInfo = {name: "Custom navn", address: "bredgade21", phone: "1223223369", email: "bobgaming@mail.com", info: "this shop is very good!"}
    return (
        <div className="main__registrereButik">
            <Registrere/>
        </div>
    )
}

export default RegistrereUser
