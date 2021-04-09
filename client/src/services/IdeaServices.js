import Client from './'

export const GetIdeas = async () => {
  try {
    const res = await Client.get('/ideas')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetIdea = async (id) => {
  try {
    const res = await Client.get(`/ideas/${id}`)
    return res
  } catch (error) {
    throw error
  }
}

export const CreateIdea = async (formValues) => {
  try {
    const res = await Client.post('/ideas', formValues)
    return res
  } catch (error) {
    throw error
  }
}

export const RemoveIdea = async (id) => {
  try {
    const res = await Client.delete(`/ideas/${id}`)
    return res
  } catch (error) {
    throw error
  }
}

export const numberOfLikes = async (idea_id, likes) => {
  let input = {
    number_of_like: likes
  }
  try {
    const res = await Client.put(`/ideas/${idea_id}`, input)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

// export const UpdateIdeas = async (id) => {
//     try {
//         const res = await Client.put(`/ideas/${id}`)
//         return res
//     } catch (error) {
//         throw error
//     }
// }
