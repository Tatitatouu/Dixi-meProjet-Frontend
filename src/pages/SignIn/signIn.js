import Footer from "../../components/Footer/footer";
import Nav from "../../components/Navigation/navigation";

import './signIn.css';

export default function Login() {
    return (
        <div>
            <Nav />
                <main className="main bg-dark pdg-100">
                    <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                    </section>
                </main>
            <Footer />
        </div>
    )
}