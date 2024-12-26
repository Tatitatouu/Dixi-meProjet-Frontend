import Footer from '../../components/Footer/footer';
import Hero from '../../components/Hero/hero';
import Features from '../../components/Features/features';

import './home.css';

export default function Home() {
    return (
        <div>
            <main className='main'>
                <Hero />
                <Features />
            </main>
            <Footer />
        </div>    
    )
}