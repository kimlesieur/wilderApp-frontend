import {useEffect, useState} from 'react';
import { getUsers } from './api';
import './App.css';
import Form from './components/Form';
import Wilder from './components/Wilder';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function App() {
  const [parent, enableAnimations] = useAutoAnimate();
  const [users, setUsers] = useState([]);
  const [newWilder, setNewWilder] = useState({});
  const [error, setError] = useState(false)

  const fetchUsers = async () => {
      await getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
      fetchUsers();
  }, [newWilder]);

  //function to update list when new wilder is created
  const addWilderToState = (newWilder) => {
    setNewWilder(newWilder);
  };


  if(!users) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <header>
          <div className="container">
            <h1>Wilders Book</h1>
          </div>
        </header>
      <main className="container">
        <Form onWilderCreated={addWilderToState} />
        <h2>Wilders</h2>
        <section className="card-row" ref={parent}>
          {error && <div>Erreur réseau</div>}
          {users && users.map((wilder) => {
            return (
              <Wilder name={wilder.name} skills={wilder.skills} key={wilder.id}/>
            )
          })}
        </section>
      </main>
    </div>
  );
  
}

export default App;
