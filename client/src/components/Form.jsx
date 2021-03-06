import React from 'react'
import { connect } from 'react-redux'
import '../styles/App.css'
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
    newIdeaDescription: (description) => dispatch(addDescription(description)),
    newIdeaStacks: (stack) => dispatch(addStacks(stack)),
    postIdea: (input) => dispatch(createIdea(input))
  }
}

const Form = (props) => {
  const { title, description, stacks } = props.ideaState

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
    const formValues = {
      title: props.ideaState.title,
      description: props.ideaState.description,
      stacks: props.ideaState.stacks,
      number_of_like: props.ideaState.numberOfLikes
    }
    props.postIdea(formValues)
  }

  return (
    <div>
      {props.ideaState.isSubmited ? (
        <div>test</div>
      ) : (
        <div>
          <h2 className="form__title">
            Submit your cool fullstack project idea.
          </h2>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <h3>Project title</h3>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => handleChange(e)}
                placeholder="Cool fullstack project name"
              />
            </div>
            <div>
              <h3>Description</h3>
              <textarea
                type="text"
                name="description"
                value={description}
                onChange={(e) => handleChange(e)}
                placeholder="An app for upvoting user submitted fullstack ideas"
              />
            </div>
            <StackList handleChange={(e) => handleChange(e)} stack={stacks} />

            <button
              type="submit"
              value="::placeholder"
              className="idea__submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
