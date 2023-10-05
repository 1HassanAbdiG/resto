import { getPanier } from "../../model/panier"

export default async function handler(request, response) {
    if (request.method === 'GET') {
        let produit = await getPanier()
        console.log("get produit", produit)
        response.status(200).json(produit);
    }
    else {
        response.setHeader('Allow', ['GET']);
        response.status(405).end(`Method ${request.method} not allowed`);
    }
}
