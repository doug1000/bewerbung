import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import companiesData from './companies.json'; // Importiere die JSON-Daten

function CompanyDropdown() {
    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleChange = (event) => {
        const company = companiesData.companies.find(c => c.title === event.target.value);
        setSelectedCompany(company);
    };

    return (
        <div style={{ marginTop: '40px' }}>
            <label style={{ marginRight: '40px' }} htmlFor="company-select">Wähle ein Unternehmen:</label>
            <select id="company-select" onChange={handleChange}>
                <option value="">--Bitte wählen--</option>
                {companiesData.companies.map((company) => (
                    <option key={company.title} value={company.title}>
                        {company.title} ({company.zeitraum})
                    </option>
                ))}
            </select>

            {selectedCompany && (
                <div style={{ marginTop: '30px', border:'1px solid lightgrey',padding:'15px' }}> 
                    <h2>{selectedCompany.title}</h2>
                    <h3>{selectedCompany.zeitraum}</h3>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{selectedCompany.description}</p>
                    <img src={selectedCompany.image} alt={selectedCompany.title} style={{ maxWidth: '300px', height: 'auto' }} />
                </div>
            )}
        </div>
    );
}

export default CompanyDropdown;
