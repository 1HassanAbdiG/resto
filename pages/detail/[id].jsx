
import Link from 'next/link'
import { getProduit, getProduitun } from '../../model/produit';

import Image from 'next/image';
export default function Product({ product }) {
    return <div className="detail">
        <div className="detailItem">
            <h1 className="marge" >{product.nom}</h1>
            <p><Image src={`/${product.chemin_image}`} alt="Pokemen" width={350} height={250} loader={({ src }) => src}></Image></p>
            <h1>{product.prix} $</h1>

        </div>

        <Link href="/"><a>Retour</a> </Link>


    </div>


}

export async function getStaticPaths() {
    let products = await getProduit();

    let paths = products.map((product) => {
        return { params: { id: product.id_produit.toString() } }
    });

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    let product = await getProduitun(params.id)

    return {
        props: {
            product: product
        }
    }
}




