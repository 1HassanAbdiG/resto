import Head from "next/head"
import { useEffect, useState } from "react";
import styles from "../styles/panier.module.css"


export default function Panier() {

    const [listEmp, setlistEmp] = useState([])
    const [vide, setvide] = useState([])
    useEffect(() => {
        fetch('/api/getpanier').then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    console.log("VERIFICATION PANIER", data)
                    setlistEmp(data);

                })
            }
        })
    }, []);



    /****delete  ***********************************************/
    const handledelete = async (id) => {
        console.log(id)
        //1------faire une copy
        const copy = [...listEmp];

        //2------faire une update
        const updete = copy.filter(elemt => elemt.id_produit !== id)
        let response = await fetch('/api/delonepanier', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(id)
        });

        if (response.ok) {
            //3------modifier 
            setlistEmp(updete)
        }
        //3------modifier 
    }
    /*************vide * *******************************************/

    const handleVider = async () => {


        //1------faire une copy
        const copy = [...vide];

        //2------faire une update

        let response = await fetch('/api/videpanier', {
            method: 'DELETE'

        });

        if (response.ok) {
            //3------modifier 
            setlistEmp([])
        }
        //3------modifier   

    }
    /*************soumttre commmande********************************** */
    const handleSumettre = async () => {

        console.log("c bon1")
        if (listEmp.length === 0) {
            console.log("hassan c vide ")
        } else {
            console.log("hassan il y a  ", listEmp.length, " element dans le panier")
        }


        let response = await fetch('/api/addcommande', {
            method: 'POST'

        });
        if (response.ok) {
            //3------modifier 
            setlistEmp([])




        }

    }



    return <>
        <Head>
            <title>Panier</title>
            <meta name="description" content="Page Panier" />
        </Head>

        <h1 className="titre"> <span>P</span>anier</h1>


        <section className={styles.conteneur}>
            <div className={styles.grid_conteneur_titre}>
                <div className={styles.item1}>Image</div>
                <div className={styles.item1}>Produit</div>
                <div className={styles.item1}>Quantite</div>
                <div className={styles.item1}>Prix</div>
                <div className={styles.item1}>Total</div>
                <div className={styles.item1}>

                </div>
            </div>

            {
                listEmp.map((pan) =>
                    <div className={styles.grid_conteneur_titre} key={pan.id_produit}>
                        <div className={styles.item2}><img src={`/${pan.chemin_image}`} /></div>
                        <div className={styles.item2}>{pan.nom}</div>
                        <div className={styles.item2}>{pan.quantite}</div>
                        <div className={styles.item2}>{pan.prix} $</div>
                        <div className={styles.item2}>{pan.total} $</div>
                        <div className={styles.item2}> <button className={styles.btn6} onClick={() => handledelete(pan.id_produit)}>x</button>
                        </div>
                    </div>
                )
            }

            <div className={styles.panierbuttons}>
                <button className={listEmp.length === 0 ? styles.disabledbtn : styles.disabledbtn1} onClick={() => handleSumettre()}>Soumettre</button>
                <button className={styles.btn5} onClick={() => handleVider()}>Vider</button>
            </div>

        </section>






    </>
}
