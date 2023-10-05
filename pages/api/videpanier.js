import { emptyPanier } from "../../model/panier"


export default async function handler(request, response) {
    if (request.method === 'DELETE') {
        await emptyPanier()
        console.log("id22",)
        response.status(200).end();
    }
    else {
        response.setHeader('Allow', ['DELETE']);
        response.status(405).end(`Method ${request.method} not allowed`);
    }
}
