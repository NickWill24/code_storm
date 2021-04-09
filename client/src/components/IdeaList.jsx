import React, { useEffect } from 'react'
import IdeaCard from './IdeaCard'
import { connect } from 'react-redux'
import '../styles/App.css'
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
    incrementLikeCount: (id, likes) => dispatch(NumberOfLikes(id, likes)),
    toggleSort: () => dispatch(toggleSort())
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

  const likeIdea = (id, likes) => {
    // INCREMENT LIKE COUNT
    likes += 1
    props.incrementLikeCount(id, likes)
  }

  const toggleSort = () => {
    // TOGGLE SORT BY CREATEDAT || LIKES
    props.toggleSort()
  }

  const renderIdeas = () => {
    return ideas.length > 0 ? (
      ideas
        .map((idea, idx) => (
          <div
            key={idx}
            created_at={idea.created_at}
            likes={idea.number_of_like}
            className="card__wrapper"
          >
            <div className="card__like">
              <button
                onClick={() => likeIdea(idea.id, idea.number_of_like)}
              ></button>
              <span>{idea.number_of_like}</span>
            </div>
            <IdeaCard
              title={idea.title}
              description={idea.description}
              stack={idea.stacks}
              id={idea.id}
              handleClick={targetIdea}
              created_at={idea.created_at}
              likes={idea.number_of_like}
            />
          </div>
        ))
        .sort((a, b) =>
          sortByLikes
            ? a.props.likes < b.props.likes
            : a.props.created_at < b.props.created_at
        )
    ) : (
      <p>...no ideas yet!</p>
    )
  }

  return (
    <div>
      <div>
        <span>Sort ideas by:</span>
        <button onClick={() => toggleSort()}>
          {sortByLikes ? 'Recent' : 'Popular'}
        </button>
      </div>
      {renderIdeas()}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList)
