import profileImage from '../images/profileImage.png';
import Skill from './Skill';


const Wilder = ({name, skills}) => {
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
    </article>
    );
}

export default Wilder;