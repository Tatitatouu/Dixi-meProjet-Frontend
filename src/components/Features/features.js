import './Features.css';

import featuresData from '../../data/features.json';

import Feature from '../Feature/feature';

export default function Features() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featuresData.map(feature =>
                <Feature feature={feature} key={feature.id}/>
            )}
        </section>
    )
}