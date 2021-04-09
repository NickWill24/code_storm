import React, { useEffect } from 'react'
import IdeaCard from './IdeaCard'
import { connect } from 'react-redux'
import {
  getIdeas,
  selectIdea,
  NumberOfLikes,
  toggleSort
} from '../store/actions/IdeaActions'

const mapStateToProps = (state) => {
  return { ideaState: state.ideaState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIdeas: () => dispatch(getIdeas()),
    selectIdea: (id) => dispatch(selectIdea(id)),
    incrementLikeCount: (id) => dispatch(NumberOfLikes(id))
    // toggleSort: () => dispatch(toggleSort())
  }
}

const IdeaList = (props) => {
  const { ideas, getIdeas, sortByLikes } = props.ideaState

  useEffect(() => {
    props.getIdeas()
  }, [getIdeas])

  const targetIdea = (id) => {
    // SET SELECTED IDEA IN STATE
    props.selectIdea(id)
    // REDIRECT TO IDEA DETAILS PAGE
    props.history.push(`/idea/${id}`)
  }

  const likeIdea = (id) => {
    // INCREMENT LIKE COUNT
    props.incrementLikeCount(id)
  }

  const toggleSort = () => {
    // TOGGLE SORT BY CREATEDAT || LIKES
  }

  const renderIdeas = () => {
    return ideas.length > 0 ? (
      ideas
        .map((idea, idx) => (
          <div
            key={idx}
            created_at={idea.created_at}
            likes={idea.number_of_like}
          >
            <IdeaCard
              title={idea.title}
              description={idea.description}
              stack={idea.stacks}
              id={idea.id}
              handleClick={targetIdea}
              created_at={idea.created_at}
              likes={idea.number_of_like}
            />
            <button onClick={() => likeIdea(idea.id)}>LIKE</button>
          </div>
        ))
        .sort((a, b) => a.props.created_at < b.props.created_at)
    ) : (
      <p>...no ideas yet!</p>
    )
  }

  return (
    <div>
      <h3>IdeaList</h3>
      <div>
        <p>Sort ideas by:</p>
        <button onClick={() => toggleSort()}>
          {sortByLikes ? 'Popularity' : 'Recent'}
        </button>
      </div>
      {renderIdeas()}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList)
