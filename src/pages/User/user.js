import Account from "../../components/Account/accountCard";
import Nav from "../../components//Navigation/navigation";
import Footer from '../../components/Footer/footer';
import accountData from '../../data/account.json';

import './user.css';

export default function User() {
    return (
        <div>
            <Nav />
            <main className="user-main">
                <div className="header">
                    <h1>Welcome back<br />Tony !</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                {accountData.map(account =>
                    <Account account={account} key={account.id} />
                )}
            </main>
            <Footer />
        </div>
    )
} 