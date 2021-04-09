import React from 'react'

const StackList = (props) => {
  return (
    <div>
      <p>Stack</p>
      <div>
        <label>MERN</label>
        <input
          type="checkbox"
          name="MERN"
          // value={props.description}
          // onChange={(e) => props.handleChange(e)}
        />
      </div>
      <div>
        <label>PERN</label>
        <input
          type="checkbox"
          name="PERN"
          // value={props.description}
          // onChange={(e) => props.handleChange(e)}
        />
      </div>
      <div>
        <label>MEAN</label>
        <input
          type="checkbox"
          name="MEAN"
          // value={props.description}
          // onChange={(e) => props.handleChange(e)}
        />
      </div>

      <div>
        <label>MEVN</label>
        <input
          type="checkbox"
          name="MEVN"
          // value={props.description}
          // onChange={(e) => props.handleChange(e)}
        />
      </div>
      <div>
        <label>LAMP</label>
        <input
          type="checkbox"
          name="LAMP"
          // value={props.description}
          // onChange={(e) => props.handleChange(e)}
        />
      </div>
      <div>
        <label>Serverless</label>
        <input
          type="checkbox"
          name="LAMP"
          // value={props.description}
          // onChange={(e) => props.handleChange(e)}
        />
      </div>

      <div>
        <label>Python-Django</label>
        <input
          type="checkbox"
          name="Python-Django"
          // value={props.description}
          // onChange={(e) => props.handleChange(e)}
        />
      </div>
    </div>
  )
}

export default StackList
