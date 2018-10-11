// PROTECTING OBJECT DATA WITH GETTERS/SETTERS

// Using getters and setters allow us to customize the behavior of the object.
// Someone sing the object doesn't have to worry too much about what is going on
// behind the scenes (like data sanitizing, validation, etc.)

const data = {
    // Amazing!!!! Saving the history of passed data!
    locations: [],
    // custom getter
    get location() {
        return this._location
    },
    set location(value) {
        // Since 'location' is already taken by getter and setter, 
        // the actial value is with underscore
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// code that uses the data object
data.location = '    Montreal  '
data.location = '    New York'
console.log(data)