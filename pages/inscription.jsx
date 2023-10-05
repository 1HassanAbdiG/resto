import { useRouter } from "next/router";
import { useState } from "react";
import { useContext } from "react"
import { UseContext } from "../contexts/useContext"

export default function Inscription() {



    const { setUser } = useContext(UseContext)
    const router = useRouter()

    //state
    const [userlist, setuserlist] = useState([]);
    const [userInfo, setuserinfo] = useState({
        email: "",
        password: ""

    })


    function handlechange(evt) {
        const { name, value } = evt.target;
        setuserinfo({ ...userInfo, [name]: value })

    }




    const handlesubmit = async (evt) => {
        evt.preventDefault()
        if (userInfo) {
            setUser(userInfo)
            router.push("/connection")
        }

        let response = await fetch('/api/addutilisateur', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        });

        if (response.ok) {
            //3------modifier 



            setuserlist([...userlist, { ...userInfo }])
            setuserinfo({
                email: "",
                password: ""
            })
        }
    }

    console.log("ggg", userlist)
    return <>
        <section class="panier" id="panier">

            <div class="contacform">
                <h3 class="texte-texte"><span>F</span>aites <span>V</span>otre <span>I</span>nscription</h3>

                <form id="formInscription" novalidate onSubmit={(evt) => handlesubmit(evt)}>

                    <h2> Courriel</h2>

                    <div class="inputboite">
                        <input
                            type="email"
                            id="inputCurriel"
                            placeholder="courriel@domaine.com "
                            required
                            name="email"
                            value={userInfo.email}
                            onChange={(evt) => handlechange(evt)} />
                        <div id="courriel-erreur" class="erreur">
                        </div>
                    </div>

                    <h2>Mot de passe: </h2>
                    <div class="inputboite">
                        <input
                            type="password"
                            id="inputMotDePasse"
                            required

                            name="password"
                            value={userInfo.password}
                            onChange={(evt) => handlechange(evt)} />

                    </div>

                    <div class="inputboite">
                        <input type="submit" value="Envoyer" />
                    </div>

                </form>
                <div >

                </div>


            </div>

        </section >
    </>
}