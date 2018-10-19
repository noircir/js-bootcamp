// Set up filters default object

// getFilters
// Arguments: none
// Return value: filters object
const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none

// const setFilters = (updates) => {
//     if (typeof updates.searchText === 'string') {
//         filters.searchText = updates.searchText
//     }
//     if (typeof updates.hideCompleted === 'boolean') {
//         filters.hideCompleted = updates.hideCompleted
//     }
// }

// Using object destructuring inside the arguments
const setFilters = ({ searchText, hideCompleted }) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
        console.log(searchText)
    }
    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
        console.log(hideCompleted)
    }
}

// Make sure to set up the exports
export { getFilters, setFilters }
