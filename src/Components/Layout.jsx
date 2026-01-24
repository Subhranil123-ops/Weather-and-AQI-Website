import "./Layout.css"
import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"
export default function Layout({children}) {
    return (
        <>
            <NavBar />
            <main className="container">
             {children}
            </main>
            <Footer />
        </>
    )
}

