import { getUtilisateurByCourriel } from "../../model/utilisateur";

export default async function handler(request, response) {
    if (request.method === 'GET') {
        let INSCRIT = await getUtilisateurByCourriel()
        console.log("get COURRIEL", INSCRIT)
        response.status(200).json(INSCRIT);
    }
    else {
        response.setHeader('Allow', ['GET']);
        response.status(405).end(`Method ${request.method} not allowed`);
    }
}