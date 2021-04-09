import React from 'react'
import { connect } from 'react-redux'
import {
  addTitle,
  addDescription,
  addStacks,
  createIdea
} from '../store/actions/IdeaActions'
import StackList from './StackList'

const mapStateToProps = (state) => {
  return { ideaState: state.ideaState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newIdeaTitle: (title) => dispatch(addTitle(title)),
    newIdeaDescription: (title) => dispatch(addDescription(title)),
    newIdeaStacks: (title) => dispatch(addStacks(title)),
    postIdea: (input) => dispatch(createIdea(input))
  }
}

const Form = (props) => {
  const { title, description, stack } = props.ideaState

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'title':
        return props.newIdeaTitle(e.target.value)
      case 'description':
        return props.newIdeaDescription(e.target.value)
      case 'stack':
        return props.newIdeaStacks(e.target.value)
      default:
        return
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.postIdea(props.ideaState.newIdea)
  }

  return (
    <div>
      <h3>Form</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Project title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => handleChange(e)}
            placeholder="Cool fullstack project name"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => handleChange(e)}
            placeholder="An app for upvoting user submitted fullstack ideas"
          />
        </div>
        <StackList handleChange={(e) => handleChange(e)} stack={stack} />

        <input type="submit" value="+" className="idea__submit" />
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
