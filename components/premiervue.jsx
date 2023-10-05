
import Link from "next/link"
import styles from "../styles/header.module.css"
import { use, useContext } from "react"
import { UseContext } from "../contexts/useContext"

export default function PremierVue() {
    const { user } = useContext(UseContext)
    return <section className={styles.partie1} id="panier">
        <div className={styles.contenu}>
            <h2>Que Des Plats Délicieux</h2>
            <p>Notre restaurant vous propose une expérience gastronomique unique. 
                Découvrez notre menu varié, composé de plats savoureux préparés avec des ingrédients frais et de qualité.
                 Que vous soyez amateur de cuisine traditionnelle ou que vous préfériez les saveurs exotiques, 
                 notre équipe de chefs talentueux saura combler vos papilles. 
                 Venez savourer un repas inoubliable dans un cadre chaleureux et convivial.</p>
        </div>

        {!user && <Link href="/inscription" className={styles.btn1}> Inscription</Link>}

        <Link href="/connection" className={styles.btn2}>Connection</Link>
        <a href="#menu" className={styles.btn3}>Voir Menu</a>
    </div >
    </section >
}