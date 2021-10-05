let initialState = [
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
];

const LogReducer = (state = initialState, action) => {

    switch (action.type) {

        case "CREATE":
            return {
                ...state,
                ...action.payload
            }

        case "DELETE":
            return
            state.filter(elem => {
                return elem.id !== action.payload
            })


    }
}

export default LogReducer;