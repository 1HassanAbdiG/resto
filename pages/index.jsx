import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import PremierVue from '../components/premiervue'
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



  return <>
    <Head>
      <title>Accueil</title>
      <meta name="description" content="Page d'accueil d'un site web de démonstration de Next.js" />
    </Head>
    <PremierVue></PremierVue>

    <h1 id="menu" className="titre" ><span>M</span>enu</h1>


    <div className="produit">
      {listEmp.map((product) =>
        <div className="menu" key={product.id_produit}>
          <h3>{product.nom}</h3>  <span>{product.prix} $</span>
          <Image src={`/${product.chemin_image}`} alt={product.nom} loader={({ src }) => src} width={450} height={250}></Image>`
          <div className="ajouterDetail">
            <Link href={`/detail/${product.id_produit}`}><button> Voir plus</button></Link>



          </div>


        </div>
      )}
    </div>
  </>






}
