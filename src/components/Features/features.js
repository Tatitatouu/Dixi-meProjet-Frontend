import chat from "../../assets/icon-chat.webp";
import money from "../../assets/icon-money.webp";
import security from "../../assets/icon-security.webp";
import './features.css';
import Feature from '../../components/Feature/feature';

const featuresData = [
    {
        id: "feature1",
        img: chat,
        title: "You are our #1 priority",
        text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        id: "feature2",
        img: money,
        title: "More savings means higher rates",
        text: "The more you save with us, the higher your interest rate will be!"
    },
    {
        id: "feature3",
        img: security,
        title: "Security you can trust",
        text: "We use top of the line encryption to make sure your data and money is always safe."
    }
];

export default function Features() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featuresData.map(feature =>
                <Feature feature={feature} key={feature.id}/>
            )}
        </section>
    );
}