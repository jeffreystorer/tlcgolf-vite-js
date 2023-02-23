import React, { useState } from 'react';
import preval from 'preval.macro';
import { FetchData } from '@/components/fetchdata';
import { SignIn } from '@/components/signin';
import { capitalize, get, set } from '@/components/common/utils';
import '@/styles/App.css';

export default function SignInPage() {
  const build =
    'Build: ' + preval`module.exports = new Date().toLocaleString();`;
  const [loading, setLoading] = useState(true);
  const [dataModeGHIN, setDataModeGHIN] = useState(true);
  let ghinNumber = get('ghinNumber') ? get('ghinNumber') : '';
  let lastName = get('lastName') ? get('lastName') : '';

  set('isLoggedIn', 'false');
  function handleClick(e) {
    dataModeGHIN ? set('dataMode', 'ghin') : set('dataMode', 'roster');
    setLoading(false);
  }

  function handleDataModeChange() {
    setDataModeGHIN((prevState) => !prevState);
    if (dataModeGHIN === false) {
      set('dataMode', 'ghin');
    } else {
      set('dataMode', 'roster');
    }
  }

  const handleInputChange = (field, event) => {
    const target = event.target;
    if (target) set(`${field}`, target.value.trim());
  };

  return (
    <>
      {loading ? (
        <SignIn
          ghinNumber={ghinNumber}
          lastName={lastName}
          handleInputChange={handleInputChange}
          handleClick={handleClick}
          handleDataModeChange={handleDataModeChange}
          build={build}
        />
      ) : (
        <>
          <FetchData />
        </>
      )}
    </>
  );
}
