import React from 'react'
import IdeaList from './IdeaList'
import '../styles/App.css'

const Dashboard = (props) => {
  return (
    <div>
      <h2 className="dashboard__title">
        A platform for upvoting fullstack project ideas.
      </h2>
      <IdeaList {...props} />
    </div>
  )
}

export default Dashboard
