import React from 'react';

// import { Container } from './styles';

import api from '~/services/api';


export default function Dashboard() {
  api.get('appointments');

  return (
    <h6>Dashboard</h6>
  );
}
