import React from 'react';
import ReactDOM from 'react-dom';

import DashboardApp from './dashboardApp/App';
// import 'react-datepicker/dist/react-datepicker.css'

const root = document.getElementById('root');
if (root) {

  ReactDOM.render(<DashboardApp />, document.getElementById('root'));
}
