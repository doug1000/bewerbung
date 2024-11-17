import React, { useState } from 'react';

const ToggleList = () => {
    // Beispiel-Daten


    const items = [
        { id: 1, title: 'Ausbildung', content: <div>  <ul> <li><b>Ausbildung</b> zum Kaufmann i. Einzelhandel (Lebens- und Genußmittel) / Reichelt AG</li> <li><b>Fachabitur:</b><br />Abendgymnasium Kläre-Bloch-Schule -- 
        Wahlpflicht: VWL</li> <li><b>Studium:</b><br />Economics (VWL)(B.A. FH)(2005-2009)<br />Praktika:<br/>Bundesministerium f. Arbeit und Soziales<br/>
        Senatverwaltung f. Wirtschaft Berlin</li> <li><b>Weiterbildung:</b><br />Oracle Datenbank Operator -- DEKRA Akademie<br/>Praktikum bei COLT Telekom</li></ul> </div> },
        { id: 2, title: 'Jobs vor/wärend d. Studiums', content: <div>  <ul> <li>Reichelt AG (Kaufm.i.Einzelh.)</li><li>DeSys (Kaufm.i.Einzelh Elektro.)</li> 
        <li>Kinder .u Jugendmuseum Schöneberg (Pädagogischer Assistent)</li><li>Warsteiner Partyservice (Event- und Service Mitarbeiter)</li>
        <li><u><b>Studentische Nebentätigkeiten:</b></u></li><li>Mitarbeiter im Krankenhausarchiv und Patientenaufnahme: DRK Klinik Westend</li>
        <li>Administrativer Mitarbeiter i. Bewerbermanagement: Jerini AG</li>
        <li>Service Mitarbeiter: Sky</li>
        
        </ul> </div> },
        { id: 3, title: 'Jobs nach d. Studium', content: <div>  <ul> <li><b><u>Just Music GmbH (2009 - 2012)</u></b></li><li>Aufbau und Leitung eines Zentrallagers für Onlineversand.</li> 
            <li>Physische Gestaltung von Lagerplätzen, Versand- und Retourestrecken</li>
            <li>Inbetriebnahme des Warenwirtschaftssystem (SAP)</li>
            <li>Personalschulung und /-Leitung</li>
            
            </ul>
            <ul>
<li><b><u>Zalando SE (2012-2023)</u></b></li>
<li><b>Abteilungsleiter OPEX/Inventur/Audits:</b></li>
<li>Leitung eines Quality Teams im Wrehouse Großbeeren. Teamgröße: 20-30 Ma</li>
<li>Einführung von Audits zur Messung von Waren-, Prozess-, und Dienstleistungsqualität</li>
<li>Einführung von Retourenprozessen in Zusammenarbeit mit Dienstleistern</li>
<li>Messung und Betreuung der perm. Inventur</li>
<li>einführung von EDV Tools und Werkzeugen zur Verbesserung der Arbeitsprozesse<br />Webbasierte Formulare zum Scannen und prozessieren von Lagervorgängen
<br/>Tools: Ms Access, PHP, MySQL</li>
<li><b><u>Web- und Datenbank Entwickler</u></b></li>
<li>Entwicklung von Standortübergreifenden Tools für den Bereich Logistik</li>
<li>Programmierung von Tools zur Datenerfassung, Dashboards, KPI Reportings, Ad hoc processing Tools für Warehouse Ramp Ups</li>
<li>Methoden: Open Source Programmierungen mit PHP, HTML,CSS, JS, Angular, React, Node, MySQL, MariaDB, PostgrSQL, Cloudproduḱte von Google</li>
<li>Anbindung von lokalen Datenbanken an den Firmen Datalake</li>
<li>Schulung von Mitarbeitern in Programmiermethoden</li>
            </ul>

            <ul>
   <li><b><u>Berliner Immobilien GmbH (BIM) (2023 - heute)</u></b></li>   
   <li>Administration und Entwicklung für <b>MS Sharepoint</b> Firmen Intranet</li>
   <li>Konzeptionierung von offline Prozessen für MS Office Anwendungen </li>
   <li>Administration der Unternehmenssoftware <b>ConjectFM - Of Oracle DB Basis</b></li>
   <li>Erstellung von PL/SQL Skripten für Automatisierungen auf Eventbasis unt Trigger Basis </li>
   
   </ul>  
 </div>},
    ];

    // Zustand verwalten, welcher Eintrag geöffnet ist
    const [openItemId, setOpenItemId] = useState(null);

    const toggleItem = (id) => {
        // Wenn der Eintrag bereits geöffnet ist, schließe ihn; andernfalls öffne ihn
        setOpenItemId(openItemId === id ? null : id);
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <button className='btn btn-info'  onClick={() => toggleItem(item.id)}>
                        {item.title}
                    </button>
                    {openItemId === item.id && (
                        <div className="content">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ToggleList;
