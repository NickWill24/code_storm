import React from 'react'

const StackList = (props) => {
  console.log(props)
  const stackOptions = ['MERN', 'PERN', 'MEAN', 'MEVN', 'LAMP', 'Flask-React']
  const customStackOptions = [
    'Python',
    'Django',
    'MongoDB',
    'Postgres',
    'Express',
    'React',
    'Node',
    'Angular',
    'Flask',
    'Linux',
    'Apache',
    'MySQL',
    'PHP',
    'Vue'
    // 'Svelte',
    // 'Nuxt',
    // 'Next.js',
    // 'Redux',
    // 'GraphQL',
    // 'Apollo Client',
    // 'MobX',
    // 'VueX',
    // 'XState',
    // 'Nest'
  ]

  const renderStackOptions = () =>
    stackOptions.map((stack) => (
      <div>
        <label>{stack}</label>
        <input
          type="radio"
          name="stack"
          value={stack}
          onChange={(e) => props.handleChange(e)}
        />
      </div>
    ))

  const renderCustomStackOptions = () =>
    customStackOptions.map((stack) => (
      <div>
        <label>{stack}</label>
        <input
          type="checkbox"
          name="customStackSelections"
          value={props.description}
          onChange={(e) => props.handleChange(e)}
        />
      </div>
    ))

  return (
    <div>
      <div>
        <p>Select a stack:</p>
        {renderStackOptions()}
      </div>
      {/* <div>
        <p>or create your own stack:</p>
        {renderCustomStackOptions()}
      </div> */}
    </div>
  )
}

export default StackList
