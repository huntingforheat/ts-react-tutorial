import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import CounterReducer from './components/CounterReducer';
import ReducerSample from './components/ReducerSample';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
    
  }

  const onSubmit = (form: {name: string, description: string}) => {
    console.log(form);
  };

  return (
    <div className='App'>
      {/* <Greetings name="siu" onClick={onClick}/> */}
      <hr />
      <Counter />
      <hr />
      <MyForm onSubmit={onSubmit}/>
      <hr />
      <CounterReducer />
      <hr />
      <ReducerSample />
    </div>
  );
}

export default App;
