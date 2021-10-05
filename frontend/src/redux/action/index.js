export const addPost = (obj) => {
    return {
        type: "CREATE",
        payload: obj
    }
}

export const deletePost = (id) => {
    return {
        type: "DELETE",
        payload: id
    }
}

export const updatePost = () => {
    return {
        type: "UPDATE",
        payload: obj
    }
}