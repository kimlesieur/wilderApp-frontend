import {useEffect, useState} from 'react';
import { getUsers } from './api';
import './App.css';
import Form from './components/Form';
import Wilder from './components/Wilder';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
  };

  useEffect(() => {
      fetchUsers();
  }, []);


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
        <Form />
        <h2>Wilders</h2>
        <section className="card-row">
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
