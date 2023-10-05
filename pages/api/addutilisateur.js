import { addUtilisateur } from "../../model/utilisateur";

export default async function handler(request, response) {
    if (request.method === 'POST') {
        await addUtilisateur(request.body.email, request.body.password);

        console.log("post utisateur")
        response.status(200).end();
    }
    else {
        response.setHeader('Allow', ['POST']);
        response.status(405).end(`Method ${request.method} not allowed`);
    }
}

