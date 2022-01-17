import React from 'react';
import './App.scss';
import { Person } from './components/Person';

const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

const App = () => (
  <>
    <Person
      name={misha.name}
      age={misha.age}
      sex={misha.sex}
      isMarried={misha.isMarried}
      partner={misha.partnerName}
    />

    <Person
      name={olya.name}
      age={olya.age}
      sex={olya.sex}
      isMarried={olya.isMarried}
      partner={olya.partnerName}
    />

    <Person
      name={alex.name}
      age={alex.age}
      sex={alex.sex}
      isMarried={alex.isMarried}
      partner={alex.partnerName}
    />
  </>
);

export default App;
