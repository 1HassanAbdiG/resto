import { addCommande } from "../../model/commande";

export default async function handler(request, response) {
    if (request.method === 'POST') {
        await addCommande()

        console.log("post commande")
        response.status(200).end();
    }
    else {
        response.setHeader('Allow', ['POST']);
        response.status(405).end(`Method ${request.method} not allowed`);
    }
}