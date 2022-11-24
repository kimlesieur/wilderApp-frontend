import {useState} from 'react';
import { createUser } from '../api';


const Form = () => {
    const [wilderName, setWilderName] = useState("");
    const handleInput = (e) => {
        e.preventDefault();
        setWilderName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(wilderName);
        //post request here
        const res = await createUser(wilderName);
        console.log(res);
    };

    return (
        <div>
            <p>Créer un nouveau Wilder :</p>
            <form className="new-member-form" onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={handleInput} value={wilderName} />
                <button type="submit">Créer</button>
            </form>
        </div>
    );
};

export default Form;