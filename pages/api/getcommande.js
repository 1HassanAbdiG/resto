import { getCommande } from "../../model/commande";

export default async function handler(request, response) {
    if (request.method === 'GET') {
        let commande = await getCommande()
        console.log("get commande", commande)
        response.status(200).json(commande);
    }
    else {
        response.setHeader('Allow', ['GET']);
        response.status(405).end(`Method ${request.method} not allowed`);
    }
}