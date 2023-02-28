import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tabs/Tab/Tab';

function App() {
  return (
    <main className="App">
      <h1>Tabs Demo</h1>
      <Tabs>
        <Tab title="Home">
          <p>Home</p>
        </Tab>
        <Tab title="Contact" disabled={true}>
          <p>Contact</p>
        </Tab>
        <Tab title="Map">
          <p>Map</p>
        </Tab>
      </Tabs>
    </main>
  );
}

export default App;
