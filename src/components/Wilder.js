import { deleteUser } from '../api';
import profileImage from '../images/profileImage.png';
import Skill from './Skill';


const Wilder = ({name, skills, id, onWilderDelete}) => {

    const handleDelete = async (id) => {
        console.log(id);
        await deleteUser(id)
        .then((res) => {
            onWilderDelete(res);
        });
    };

    return (
    <article className="card">
        <img src={profileImage} alt="profile" />
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
        </p>
        <h4>Wild Skills</h4>
        <ul className="skills">
            {skills.map((skill) => <Skill skill={skill.name} key={skill.id} />)}
        </ul>
        <button onClick={() => handleDelete(id)}>Supprimer</button>
    </article>
    );
}

export default Wilder;