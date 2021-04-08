import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return { ideaState: state.ideaState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newIdeaInput: () => dispatch(),
    postIdea: () => dispatch()
  }
}

const Form = (props) => {
  // const { title, description, stack } = props.ideaState.newIdea
  // const { ideas } = props.ideaState

  const handleChange = (e) => {}
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h3>Form</h3>
      <form>
        <div>
          <label>Project title</label>
          <input
            type="text"
            name="title"
            value={props.title}
            onChange={(e) => props.handleChange(e)}
            placeholder="Cool fullstack project name"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            value={props.description}
            onChange={(e) => props.handleChange(e)}
            placeholder="An app for upvoting user submitted fullstack ideas"
          />
        </div>
        <div>
          <p>Stack</p>
          <div>
            <label>MERN</label>
            <input
              type="checkbox"
              name="MERN"
              value={props.description}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
          <div>
            <label>PERN</label>
            <input
              type="checkbox"
              name="PERN"
              value={props.description}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
          <div>
            <label>MEAN</label>
            <input
              type="checkbox"
              name="MEAN"
              value={props.description}
              onChange={(e) => props.handleChange(e)}
            />
          </div>

          <div>
            <label>MEVN</label>
            <input
              type="checkbox"
              name="MEVN"
              value={props.description}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
          <div>
            <label>LAMP</label>
            <input
              type="checkbox"
              name="LAMP"
              value={props.description}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
          <div>
            <label>Serverless</label>
            <input
              type="checkbox"
              name="LAMP"
              value={props.description}
              onChange={(e) => props.handleChange(e)}
            />
          </div>

          <div>
            <label>Python-Django</label>
            <input
              type="checkbox"
              name="Python-Django"
              value={props.description}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
        </div>

        <input type="submit" value="+" className="idea__submit" />
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
