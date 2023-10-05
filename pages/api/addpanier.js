import { addToPanier } from "../../model/panier"

export default async function handler(request, response) {
    if (request.method === 'POST') {
        await addToPanier(request.body, 1)

        console.log("post", request.body)
        response.status(200).end();
    }
    else {
        response.setHeader('Allow', ['POST']);
        response.status(405).end(`Method ${request.method} not allowed`);
    }
}
