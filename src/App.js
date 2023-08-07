import { Switch, Route } from 'react-router-dom';

import { useState } from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import Students from './Components/Students';
import Addstudents from './Components/Addstudents';
import Editstudent from './Components/Editstudent';
import data from './Data/data';

function App() {
  const [student, setstudent] = useState(data);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Welcome/>
        </Route>

        <Route path="/dashboard">
          <Students student={student} setstudent={setstudent} />
        </Route>

        <Route path="/addstudents">
          <Addstudents student={student} setstudent={setstudent} />
        </Route>

        <Route path="/edit/:id">
          <Editstudent student={student} setstudent={setstudent} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
