import React from 'react'

import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <nav>
        <Link to="oder">Order</Link> |
        <Link to="profile">Profile</Link> |
        <Link to="setting">Setting</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default Dashboard
