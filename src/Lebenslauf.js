import React from 'react';
//import CompanyDropdown from './components/CompanyDropdown';
import ToggleList from './components/ToggleList';

function Lebenslauf() {
    return (
        <div className="container">
            <h1 className="text-gold">Lebenslauf</h1>


<ToggleList />

            
          {/*  <p className="text-gold">
                Hier können Sie meinen Lebenslauf herunterladen. Klicken Sie einfach auf den untenstehenden Link.
            </p> */}
            <a href="/Lebenslauf.pdf" className="btn btn-primary" style={{marginTop:30}}download>
                Lebenslauf herunterladen
            </a>
        </div>
    );
}

export default Lebenslauf;
