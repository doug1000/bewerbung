import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:andreaschrist@outlook.com?subject=Kontakt%20von%20${name}&body=${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-5">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Nachricht</label>
                <textarea 
                    className="form-control" 
                    id="message" 
                    rows="3" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Senden</button>
        </form>
    );
}

export default ContactForm;