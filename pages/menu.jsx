import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


import { useEffect, useState } from 'react'


export default function Home() {
  //stade
  /**************Nouveau state    ******** */
  const [listEmp, setlistEmp] = useState([])

  const [inputs, setInputs] = useState([]);

  /*************state modifier********* */
  const [modif, setmodif] = useState([])

  /************UPDATE************ */
  const [nouvup, setnouvp] = useState([])

  useEffect(() => {
    fetch('/api/produit').then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log("hhhhh", data)
          setlistEmp(data);

        })
      }
    })
  }, []);

  //fonction pour ajouter un produit
  const hanleProduit = async (id) => {
    console.log(id)


    let response = await fetch('/api/addpanier', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id)
    });
    if (response.ok) {
      ;

    }

  }


  return <>
    <Head>
      <title>Menu</title>
      <meta name="description" content="Page d'accueil d'un site web de démonstration de Next.js" />
    </Head>


    <h1 className="titre"> <span>M</span>enu</h1>

    <div className="produit">
      {listEmp.map((product) =>
        <div className="menu" key={product.id_produit}>
          <h3>{product.nom}</h3>  <span>{product.prix} $</span>
          <Image src={`/${product.chemin_image}`} alt={product.nom} loader={({ src }) => src} width={450} height={250}></Image>`
          <div className="ajouterDetail">

            <button onClick={() => hanleProduit(product.id_produit)}> Ajouter au panier </button>

          </div>


        </div>
      )}
    </div>
  </>






}
