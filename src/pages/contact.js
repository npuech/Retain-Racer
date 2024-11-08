import React from 'react'

function Contact() {
    return (
        <div>
            <main>
                <div className="container_contact animate__animated animate__zoomIn">
                    <div className="container_form">
                        <form action="#" method="post">
                            <h2>Contactez-nous</h2>
                            <p>Pour toutes demandes, problèmes ou questions, veuillez répondre au formulaire.</p>
                            <input type="text" id="name" name="name" placeholder="Nom & Prénom" minLength="2" maxLength="20" required/>
                                <span></span>
                                <input type="email" id="email" name="email" placeholder="Email" required/>
                                    <span></span>
                                    <label htmlFor="sujet">Sujet : </label>
                                    <select id="sujet" name="sujet" required>
                                        <option value="probleme">Problème &#x2757;</option>
                                        <option value="question">Question &#x2753;</option>
                                        <option value="demande">Demande &#x1F58B;</option>
                                    </select>
                                    <textarea id="message" name="message" placeholder="Message" minLength="2" maxLength="100" rows="10" cols="50" required title="Merci d'avoir une réponse claire, nette et précise."></textarea>
                                    <button type="submit" id="submit" name="submit" value="post">Envoyer</button>
                        </form>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Contact;