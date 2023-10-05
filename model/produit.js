import connectionPromise from "../connection.js"

export const getProduit = async () => {
    let connection = await connectionPromise;
    let results = await connection.all(
        'SELECT id_produit, nom, chemin_image, printf("%.2f", prix) AS prix FROM produit;'
    );
    return results;
}
export const getProduitun = async (id) => {
    let connection = await connectionPromise;
    let results = await connection.get(
        'SELECT id_produit, nom, chemin_image, printf("%.2f", prix) AS prix FROM produit WHERE id_produit = ?', [id]
    );
    return results;
}