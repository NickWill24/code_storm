import React from 'react'
import IdeaList from './IdeaList'

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>

      <IdeaList {...props} />
    </div>
  )
}

export default Dashboard
