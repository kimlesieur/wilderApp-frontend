import {useEffect, useState} from 'react';
import { getUsers } from './api';
import './App.css';
import Wilder from './components/Wilder';

const wilders = [
    {
        "id": 1,
        "name": "Timber",
        "skills": [
            {
                "id": 1,
                "name": "PHP"
            },
            {
                "id": 5,
                "name": "Swift"
            }
        ]
    },
    {
        "id": 2,
        "name": "Dave looper",
        "skills": []
    },
    {
        "id": 3,
        "name": "Jean Michel",
        "skills": []
    },
    {
        "id": 4,
        "name": "Dave looper",
        "skills": []
    },
    {
        "id": 6,
        "name": "Micheal",
        "skills": [
            {
                "id": 1,
                "name": "PHP"
            },
            {
                "id": 3,
                "name": "BloubiBoulga"
            },
            {
                "id": 5,
                "name": "Swift"
            }
        ]
    },
];

function App() {
  const [users, setUsers] = useState();

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
        <h2>Wilders</h2>
        <section className="card-row">
          {users.map((wilder) => {
            return (
              <Wilder name={wilder.name} skills={wilder.skills} key={wilder.id}/>
            )
          } )}
        </section>
      </main>
    </div>
  );
  
}

export default App;
