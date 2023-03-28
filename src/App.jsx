import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { useRecoilValue } from 'recoil';
import {
  AddDeleteScheduleMenuItem,
  EditBetsMenuItem,
  EditTableMenuItem,
} from '@/components/app';
import { SaturdayTable } from '@/components/saturday';
import { LookupDataTable } from '@/components/lookup';
import { ScoresTable } from '@/components/scores';
import {
  ExportPage,
  GroupsPage,
  HelpPage,
  IndividualPage,
  LineupPage,
  LookupPage,
  SaturdayPage,
  SignInPage,
  SignOutPage,
  SchedulePage,
  TableCreatePage,
  TutorialsPage,
} from '@/pages';
import * as state from '@/store';
import '@/styles/App.css';

import { get } from '@/components/common/utils';

export default function App() {
  const hasSchedule = useRecoilValue(state.hasSchedule);
  const schedules = useRecoilValue(state.schedules);
  let isLoggedIn = get('isLoggedIn');
  if (isLoggedIn !== 'true') {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<SignInPage />}></Route>
          <Route path='/tablecreate' element={<TableCreatePage />}></Route>
          <Route path='/saturday' element={<SaturdayPage />}></Route>
          <Route path='/scores' element={<ScoresTable />}></Route>
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LineupPage />} />
            <Route path='export' element={<ExportPage />} />
            <Route path='groups' element={<GroupsPage />} />
            <Route path='individual' element={<IndividualPage />} />
            <Route path='tutorials' element={<TutorialsPage />} />
            <Route path='help' element={<HelpPage />} />
            <Route path='signout' element={<SignOutPage />} />
            <Route
              path='saturday'
              element={<SaturdayTable loggedIn={true} />}
            />
            <Route path='lookup' element={<LookupPage />} />
            <Route path='ghininfo' element={<LookupDataTable />} />
            <Route path='scores' element={<ScoresTable />} />

            {hasSchedule &&
              schedules.map((schedule) => {
                let path = '/' + schedule.name.toLowerCase() + '-schedule';
                return (
                  <Route
                    key={'route/' + schedule.id + '/' + schedule.name}
                    path={path}
                    element={<SchedulePage scheduleName={schedule.name} />}
                  />
                );
              })}
          </Route>
        </Routes>
      </>
    </Router>
  );
}

function Layout() {
  const hasSchedule = useRecoilValue(state.hasSchedule);
  const schedules = useRecoilValue(state.schedules);
  const [activeNav, setActiveNav] = useState('lineup');
  const ghinNumber = get('ghinNumber');

  const brandStyle = {
    color: '#fff',
    backgroundColor: '#00365f',
    alignItems: 'center',
    boxShadow:
      '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.28)',
    height: '40px',
    marginLeft: 'auto',
    marginRight: '20px',
    fontSize: '24px',
    overflow: 'hidden',
    padding: '0px 5px 0px 5px',
    textAlign: 'center',
    width: 'fit-content',
  };

  const handleNavSelect = (eventkey) => {
    setActiveNav(eventkey);
  };

  const styleActive = {
    backgroundColor: '#3378ac',
    color: 'white',
  };

  return (
    <>
      <Navbar>
        <Container>
          <LinkContainer to='/signout' style={brandStyle}>
            <Navbar.Brand>TLC Golf</Navbar.Brand>
          </LinkContainer>
          <Nav
            className='me-auto'
            activeKey={activeNav}
            onSelect={handleNavSelect}>
            <LinkContainer activeStyle={styleActive} to='/'>
              <Nav.Link eventkey='lineup'>Lineup</Nav.Link>
            </LinkContainer>
            <LinkContainer activeStyle={styleActive} to='/export'>
              <Nav.Link eventkey='export'>Export</Nav.Link>
            </LinkContainer>
            <NavDropdown
              align='end'
              eventkey='more'
              title='More...'
              id='basic-nav-dropdown'>
              <LinkContainer activeStyle={styleActive} to='/groups'>
                <NavDropdown.Item eventkey='groups'>Groups</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer activeStyle={styleActive} to='/individual'>
                <NavDropdown.Item eventkey='individual'>
                  Individual
                </NavDropdown.Item>
              </LinkContainer>
              {ghinNumber === '585871' && (
                <LinkContainer activeStyle={styleActive} to='/saturday'>
                  <NavDropdown.Item eventkey='saturday'>
                    Saturday
                  </NavDropdown.Item>
                </LinkContainer>
              )}
              <LinkContainer activeStyle={styleActive} to='/lookup'>
                <NavDropdown.Item eventkey='lookup'>
                  Lookup GHIN Information
                </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              {hasSchedule &&
                schedules.map((schedule) => {
                  let path = '/' + schedule.name.toLowerCase() + '-schedule';
                  return (
                    <LinkContainer
                      key={'route/' + schedule.id + '/' + schedule.name}
                      activeStyle={styleActive}
                      to={path}>
                      <NavDropdown.Item eventkey={schedule.name.toLowerCase()}>
                        {schedule.name} Schedule
                      </NavDropdown.Item>
                    </LinkContainer>
                  );
                })}
              <NavDropdown.Divider />
              <NavDropdown.Item eventkey='edit-table'>
                <EditTableMenuItem />
              </NavDropdown.Item>
              <NavDropdown.Item eventkey='edit-bets'>
                <EditBetsMenuItem />
              </NavDropdown.Item>
              <NavDropdown.Item eventkey='add-schedule'>
                <AddDeleteScheduleMenuItem />
              </NavDropdown.Item>
              <LinkContainer activeStyle={styleActive} to='/tutorials'>
                <NavDropdown.Item eventkey='tutorials'>
                  Tutorials
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer activeStyle={styleActive} to='/help'>
                <NavDropdown.Item eventkey='help'>Help</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer activeStyle={styleActive} to='/signout'>
                <NavDropdown.Item eventkey='signout'>Sign out</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
