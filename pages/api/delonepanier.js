import { removeFromPanier } from "../../model/panier"


export default async function handler(request, response) {
    if (request.method === 'DELETE') {
        await removeFromPanier(request.body)
        console.log("id22", request.body)
        response.status(200).end();
    }
    else {
        response.setHeader('Allow', ['DELETE']);
        response.status(405).end(`Method ${request.method} not allowed`);
    }
}
