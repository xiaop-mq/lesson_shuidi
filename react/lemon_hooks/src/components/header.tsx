import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent = () => {
  return (
    <>
      <Link to="/members" className="nav-link" >Members</Link>
    </>
  )
}