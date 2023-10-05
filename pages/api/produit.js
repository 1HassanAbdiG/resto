import { getProduit } from "../../model/produit";

export default async function handler(request, response) {
    if (request.method === 'GET') {
        let produit = await getProduit()
        console.log("ffff", produit)
        response.status(200).json(produit);
    }
    else {
        response.setHeader('Allow', ['GET']);
        response.status(405).end(`Method ${request.method} not allowed`);
    }
}
