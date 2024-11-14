import React from 'react';
import CompanyDropdown from './components/CompanyDropdown';

function Lebenslauf() {
    return (
        <div className="container mt-5">
            <h2 className="text-gold">Lebenslauf</h2>

<CompanyDropdown />

            
            <p className="text-gold">
                Hier können Sie meinen Lebenslauf herunterladen. Klicken Sie einfach auf den untenstehenden Link.
            </p>
            <a href="/Lebenslauf.pdf" className="btn btn-primary" download>
                Lebenslauf herunterladen
            </a>
        </div>
    );
}

export default Lebenslauf;
