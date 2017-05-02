import React from 'react';

import { Link } from 'react-router-dom'

const LandingPageBody = () => (
  <div className="landingpage-body">
    I am landing page
    <Link to="/dashboard"> To dashboard </Link>
  </div>
);

export default LandingPageBody;
