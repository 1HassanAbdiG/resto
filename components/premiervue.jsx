
import Link from "next/link"
import styles from "../styles/header.module.css"
import { use, useContext } from "react"
import { UseContext } from "../contexts/useContext"

export default function PremierVue() {
    const { user } = useContext(UseContext)
    return <section className={styles.partie1} id="panier">
        <div className={styles.contenu}>
            <h2>Que Des Plats Délicieux</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis numquam distinctio, voluptate
                veritatis vel ipsum animi ex eligendi harum a debitis laboriosam possimus placeat ad officia commodi at!
                Quo, aliquid.</p>

            {!user && <Link href="/inscription" className={styles.btn1}> Inscription</Link>}

            <Link href="/connection" className={styles.btn2}>Connection</Link>
            <a href="#menu" className={styles.btn3}>Voir Menu</a>
        </div>
    </section>
}