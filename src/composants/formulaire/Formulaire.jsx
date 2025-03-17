import React from 'react'
import styles from './formulaire.module.css'
import Boutons from '../boutons/Boutons'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import Image from '../../assets/home.svg'



function Formulaire() {
  return (
    <section className={styles.formulaire_container}>
        <div className={styles.formulaire_form}>
        <div className={styles.formulaire_btns}>
        <Boutons text='Via le chat' icon={<IoChatbubbleEllipsesOutline/>} />
        <Boutons text='Par téléphone' icon={<IoIosCall />} />
        </div>

        <h2>Contacter nous par mail</h2>
        <form className={styles.formulaire}>
            <div className={styles.inputGroup}>
                <label htmlFor="nom">Nom</label>
                <input type="text" name="nom"/>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="prenom">Prénom</label>
                <input type="text" name="prenom"/>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea name="message"/>
            </div>
            <Boutons text='Envoyer' />  
        </form>
        </div>

        <div className={styles.rmulaire_fromfo}>
            <img src={Image} alt="Une personne qui dépose une grosse enveloppe" />
        </div>
    </section>
)
}

export default Formulaire