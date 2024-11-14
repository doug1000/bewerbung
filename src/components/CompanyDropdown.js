import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useSpring, animated } from '@react-spring/web'; // Importiere react-spring
import companiesData from './companies.json'; // Importiere die JSON-Daten

function CompanyDropdown() {
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [show, setShow] = useState(false);
    const [key, setKey] = useState(0);

    const handleChange = (event) => {
        const company = companiesData.companies.find(c => c.title === event.target.value);
        setSelectedCompany(company);
        setShow(!!company); // Zeigt die Details an, wenn ein Unternehmen ausgewählt ist
        setKey(prevKey => prevKey + 1); // Aktualisiert den Key, um die Animation zu erzwingen
    };

    const slideIn = useSpring({
        transform: show ? 'translateX(0)' : 'translateX(100%)',
        opacity: show ? 1 : 0,
    });

    return (
        <div>
            <label htmlFor="company-select">Wähle ein Unternehmen:</label>
            <select id="company-select" onChange={handleChange}>
                <option value="">--Bitte wählen--</option>
                {companiesData.companies.map((company) => (
                    <option key={company.title} value={company.title}>
                        {company.title} ({company.zeitraum})
                    </option>
                ))}
            </select>

            {selectedCompany && (
                <animated.div style={slideIn} key={key}>
                    <h2>{selectedCompany.title}</h2>
                    <h3>{selectedCompany.zeitraum}</h3>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{selectedCompany.description}</p>
                    <img src={selectedCompany.image} alt={selectedCompany.title} style={{ maxWidth: '100%', height: 'auto' }} />
                </animated.div>
            )}
        </div>
    );
}

export default CompanyDropdown;





