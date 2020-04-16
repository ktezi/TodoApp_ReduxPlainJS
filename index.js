
function createStore() {
    // The store should have four parts
    // 1. The state
    // 2. Get the state.
    // 3. Listen to changes on the state.
    // 4. Update the state
    const DELETE_FLAVOR = 'DELETE_FLAVOR'
    function appReducer(state, action) {
        if (action.type === DELETE_FLAVOR) {
            let newState = []
            state.map((a) => {
                if (a.flavor !== action.flavor) {
                    newState.push(a)
                }
            })

            return newState;
        }
        return state
    }

    let iceCreams = [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
    var action = { type: 'DELETE_FLAVOR', flavor: 'Vanilla' };
    let listeners = []

    const getState = () => { return iceCreams }
    console.log('old state', getState())

    let obj = appReducer(iceCreams, action)
    console.log('new state', obj)
}
createStore();
