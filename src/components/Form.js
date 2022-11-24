import {useState} from 'react';
import { createUser } from '../api';


const Form = ({onWilderCreated}) => {
    const [wilderName, setWilderName] = useState("");
    const [feedback, setFeedback] = useState(false);
    const [error, setError] = useState(false);
    const [processing, setProcessing] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setFeedback(false);
        setWilderName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUser(wilderName)
        .then((data) => {
            setWilderName("");
            setFeedback(true);
            onWilderCreated(data);
        })
        .catch(err => {
            setError(true);
        })
        
    };

    return (
        <div>
            <p>Créer un nouveau Wilder :</p>
            <form className="new-member-form" onSubmit={e => handleSubmit(e)}>
                <label htmlFor="name" className=""/>
                <span className=''>Nom : </span>
                <input 
                    type="text" 
                    maxLength={30}
                    id="name"
                    onChange={handleChange} 
                    value={wilderName}
                    required
                    disabled={processing}
                />
                <button type="submit">+</button>
            </form>
            {feedback && <div>Wilder créé !</div>}
            {error && <div>Erreur serveur</div>}
        </div>
    );
};

export default Form;