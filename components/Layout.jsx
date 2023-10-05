import Header from "./Header";
import Footer from "./Footer";
import { UseContext } from "../contexts/useContext";
import { useState } from "react";

export default function Layout({ children }) {
    const [user, setUser] = useState(null)
    return <>
        <UseContext.Provider value={{ user, setUser }}>
            <Header />
            <main>
                {
                    children
                }
            </main>
            <Footer />

        </UseContext.Provider>

    </>
}