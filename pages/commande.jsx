import Head from "next/head"
import { useEffect, useState } from "react"
import styles from "../styles/commande.module.css"


Head
export default function Commande() {
    const [listEmp, setlistEmp] = useState([])
    const [vide, setvide] = useState([])
    let s = 0;
    useEffect(() => {
        fetch('/api/getcommande').then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    console.log("hhhhh", data)
                    setlistEmp(data);
                })
            }
        })
    }, []);

    console.log(listEmp)
    return <>
        <Head>
            <title>Commande</title>
            <meta name="description" content="Page commande" />
        </Head>

        <h1 className="titre"> <span>C</span>ommande</h1>
        <div className={styles.commandes}>

            {
                
                listEmp.map((com,index) =>
                    <ul className={styles.commande} key={index}>

                        <li id="commande_{{this.id_commande}}">
                            <div className={styles.info}>
                                <div className={styles.id}>{com.id_commande}</div>
                                <div className={styles.date}>{com.date}</div>
                                <select>
                                    <option >en cours</option>
                                    <option >en commande</option>
                                    <option >en cuissine</option>
                                </select>
                            </div>
                            <table className={styles.produit}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className={styles.nom}>Produit</th>
                                        <th className={styles.quantite}>Quantité</th>
                                        <th>Total</th>
                                        <th>Total cumulé</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {com.produit.map((pro,index) =>
                                        <tr data-id-produit="{{this.id_produit}}" key={index}>
                                            <td><img src={`/${pro.chemin_image}`} alt="{{this.nom}}" /></td>
                                            <td className={styles.nom}>{pro.nom}</td>
                                            <td className={styles.quantite}>{pro.quantite}</td>
                                            <td className={styles.quantite}>{pro.tot} $</td>
                                            <td className={styles.quantite}>{s += pro.tot} $</td>


                                        </tr>
                                    )
                                    }
                                </tbody>
                                <tr>
                                    <td>
                                        total {s}

                                    </td>
                                </tr>

                            </table>
                            <h1 className={styles.cacher}>
                                {s = 0}

                            </h1>

                        </li>

                    </ul>


                )

            }


        </div>


    </>
}
