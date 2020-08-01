import React, { useState } from 'react';

function App() {
  const [enableFirstName, setEnableFirstName] = useState(
    false,
  );
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleChange(evt) {
    setName(evt.target.value);
  }

  function handleLastNameChange(evt) {
    setLastName(evt.target.value);
  }

  function handleEnableChange() {
    setEnableFirstName(!enableFirstName);
  }

  return (
    <div>
      <h1>
        My name is: {enableFirstName ? name : ''} {lastName}
      </h1>
      <input
        type="checkbox"
        value={enableFirstName}
        onChange={handleEnableChange}
      />
      <input
        type="text"
        value={name}
        onChange={handleChange}
      />
      <input
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
      />
    </div>
  );
}

export default App;
