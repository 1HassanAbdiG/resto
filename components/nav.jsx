import styles from "../styles/header.module.css"
import Link from "next/link"
import { use, useContext } from "react"
import { UseContext } from "../contexts/useContext"
import { useRouter } from "next/router"
export default function Nav() {
    const { user, setUser } = useContext(UseContext)
    const router = useRouter()
    const quitter = () => {
        setUser(null)
        router.push("/")
    }
    return <>
        <div className={styles.header}>
            <a href="#" className={styles.logo}><span>R</span>esto<span>O</span>mega</a>
            <ul className={styles.navbar}>
                <li>
                    {!user && <Link href="/"   > Accueil</Link>}

                </li>
                <li>
                    {user && <Link href="/menu" className={router.pathname === "/menu" ? "active" : undefined} > <span> M</span>enu</Link>}
                </li>

                <li>
                    {user && <Link href="/panier" className={router.pathname === "/panier" ? "active" : undefined}> <span> P</span>anier</Link>}
                </li>
                <li>
                    {user && <Link href="/commande" className={router.pathname === "/commande" ? "active" : undefined} > <span> C</span>ommande</Link>}
                </li>


                {!user && <Link href="/inscription" className={styles.btn_inscription}>
                    Inscrivez-vous</Link>}

                {user && <Link href="/" className={styles.btn_inscription} onClick={quitter}>

                    Deconnectez-vous</Link>
                }
            </ul>
        </div>
    </>
}