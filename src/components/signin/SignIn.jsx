import React from 'react';
import Header from '@/components/common/Header';
import '@/styles/App.css';

export default function SignInForm({
  ghinNumber,
  lastName,
  handleInputChange,
  handleClick,
  handleDataModeChange,
  //build,
}) {
  return (
    <>
      <Header />
      <div className='div--center'>
        <br />
        <br />
        <label htmlFor='ghinnumber'>GHIN Number:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          className='input'
          type='text'
          id='ghinnumber'
          defaultValue={ghinNumber}
          onFocus={(event) => (event.target.value = ghinNumber)}
          onBlur={(event) => handleInputChange('ghinNumber', event)}
        />

        <br></br>
        <br></br>

        <label htmlFor='lastName'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Name:&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
        <input
          className='input'
          type='text'
          id='lastName'
          defaultValue={lastName}
          onFocus={(event) => (event.target.value = lastName)}
          onBlur={(event) => handleInputChange('lastName', event)}
        />
        <br />
        <br />
        <button className={'button not-stacked'} onClick={handleClick}>
          Sign In
        </button>
        <br />
        <br />
        <input
          className='checkbox'
          type='checkbox'
          id='dataModeGHIN'
          onChange={handleDataModeChange}
          defaultChecked
        />
        <label htmlFor='dataModeGHIN'>&nbsp;Fetch Data from GHIN</label>

        {/* <footer className='footer--center'>
          {build}
          <br />
          <br />
        </footer> */}
      </div>
    </>
  );
}
