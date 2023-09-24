import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import * as React from 'react';


export default class App extends React.Component{
  render() {
    return (<div className='control-pane'>
        <div className="row justify-content-center mt-5 p-0 container">
          <h3 className='mx-auto'>Syncfusion React Schedule</h3>
        </div>
    <div className='control-section'>
    <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>
    </div>
  </div>);
}
};