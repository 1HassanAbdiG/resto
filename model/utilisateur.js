//import bcrypt from 'bcrypt';//POUR INCRIPTER LE MOT DE PASSE
import connectionPromise from '../connection.js';

//AJOUTER UN UTILISATEUR

export const addUtilisateur = async (courriel, motDePasse) => {
    let connection = await connectionPromise;

    // let motDePasseChiffre = await bcrypt.hash(motDePasse, 10);
    //INCRIPTER
    await connection.run(
        `INSERT INTO utilisateur(courriel,mot_de_passe, id_type_utilisateur)
        VALUES(?, ?, 1);`,
        [courriel, motDePasse]
    );
}

//POUR CHERCHER UTILISATEUR PAR COURRIEL
export const getUtilisateurByCourriel = async () => {
    let connection = await connectionPromise;

    let utilisateur = await connection.all(

        `SELECT * FROM utilisateur `,

    );

    return utilisateur;
}
