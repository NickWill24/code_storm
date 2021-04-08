import React from 'react'
import { connect } from 'react-redux'
import { IdeaInput, AddIdea } from '../store/actions/IdeaInput'
import StackList from './StackList'

const mapStateToProps = (state) => {
  return { ideaState: state.ideaState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newIdeaInput: (inputName, inputValue) =>
      dispatch(IdeaInput(inputName, inputValue)),
    postIdea: (input) => dispatch(AddIdea(input))
  }
}

const Form = (props) => {
  const { title, description, stack } = props.ideaState

  const handleChange = (e) => {
    props.newIdeaInput(e.target.name, e.target.value)
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
