import React from 'react'
import imgE from "../Img/Vacation-580x386.png";

const ProfilInfo = () => {
    return (
        <div className="ProfilInfo__main">
            <div className="ProfilInfo__banner">
            <img className="" src={imgE} alt=""></img>
            </div>
            <div className="clearboth"> </div>
            <h1 className="ProfilInfo__h1">Profil Id: 9237462</h1>
            <div className="knapdivmagi">
                            {/*Skal laves til navlink, og skal linkes til Alex's rediger side */}
                            <button className="ProfilInfo__button">Rediger Profil</button>
            </div>
            <div className="ProfilInfo__mainbox">
                <div className="ProfilInfo__content">
                    <p className="ProfilInfo__info">Dit navn:</p>
                    <p className="ProfilInfo__infoContent">Alexander</p>
                </div>
                <hr className="ProfilInfo__hr"></hr>
                <div className="ProfilInfo__content">
                    <p className="ProfilInfo__info">Password:</p>
                    <p className="ProfilInfo__infoContent">********</p>
                </div>
                <hr className="ProfilInfo__hr"></hr>
                <div className="ProfilInfo__content">
                    <p className="ProfilInfo__info">Email:</p>
                    <p className="ProfilInfo__infoContent">sejminecraft@hotmail.com</p>
                </div>
                <hr className="ProfilInfo__hr"></hr>
                <div className="ProfilInfo__content">
                    <p className="ProfilInfo__info">Telefonnummer:</p>
                    <p className="ProfilInfo__infoContent">33193200</p>
                </div>
                <hr className="ProfilInfo__hr"></hr>
                <div className="ProfilInfo__content">
                    <p className="ProfilInfo__info">Nation:</p>
                    <p className="ProfilInfo__infoContent">India</p>
                </div>
                <hr className="ProfilInfo__hr"></hr>
                <div className="ProfilInfo__content">
                    <p className="ProfilInfo__info">Adresse:</p>
                    <p className="ProfilInfo__infoContent">Borgergade 27, 1300 københavn K</p>
                </div>
                <hr className="ProfilInfo__hr"></hr>
            </div>
            
            <div className="ProfilInfo__salto">Din Salto: 00,00 kr.</div>
        </div>
    )
}

export default ProfilInfo
