import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useContext } from "react"
import { UseContext } from "../contexts/useContext"
import styles from "../styles/panier.module.css"

export default function Connection() {



    const { user, setUser } = useContext(UseContext)
    const router = useRouter()

    //state
    const [userlist, setuserlist] = useState([]);
    const [userInfo, setuserinfo] = useState({
        courriel: "",
        mot_de_passe: ""

    })
    useEffect(() => {
        fetch('/api/getcourriel').then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    console.log("inscrit", data)
                    setuserlist(data);
                })

            } else {
                console.log("ins ne fonctionne pas")
            }
        })
    }, []);

    let veri = true;

    function handlechange(evt) {
        const { name, value } = evt.target;
        setuserinfo({ ...userInfo, [name]: value })

    }


    /***FONCTION DE VERIFICATION  */
    function verifier() {
        userlist.map((verif) => {
            if (verif.courriel === userInfo.courriel) {
                console.log(true)

            } else {
                console.log(false)
            }
        })


    }



    function handlesubmit(evt) {
        evt.preventDefault()
        verifier()
        userlist.map((verif) => {
            if (verif.courriel === userInfo.courriel) {
                console.log(true)

                setUser(userInfo)
                router.push("/menu")


            } else {
                setUser(null)
                router.push("/connection")
            }
        })



        setuserlist([...userlist, { ...userInfo }])
        setuserinfo({
            courriel: "",
            mot_de_passe: ""


        })
        console.log("verification", verifier())
    }

    console.log("glist", userlist)

    return <>
        {user &&


            <section class="panier" id="panier">

                <div class="contacform">
                    <h3 class="texte-texte"><span>F</span>aites <span>V</span>otre <span>c</span>onnection</h3>

                    <form id="formInscription" novalidate onSubmit={(evt) => handlesubmit(evt)}>

                        <h2> Courriel</h2>

                        <div class="inputboite">
                            <input
                                type="courriel"
                                id="inputCurriel"
                                placeholder="courriel@domaine.com "
                                required
                                name="courriel"
                                value={userInfo.email}
                                onChange={(evt) => handlechange(evt)} />
                            <div id="courriel-erreur" class="erreur">
                            </div>
                        </div>

                        <h2>Mot de passe: </h2>
                        <div class="inputboite">
                            <input
                                type="mot_de_passe"
                                id="inputMotDePasse"
                                required
                                name="mot_de_passe"
                                value={userInfo.password}
                                onChange={(evt) => handlechange(evt)} />

                        </div>

                        <div class={veri === false ? "inputboite" : "inputboite1"}>
                            <input type="submit" value="Envoyer" />
                        </div>

                    </form>

                </div>

            </section >
        }
        {!user && <><h1 className="titre">
            <span>V</span>euillez vous inscrire pour se connecter
            <span>OU</span>
            <h1> <span>V</span>euillez reconnecter</h1></h1>
        </>


        }
    </>
}
