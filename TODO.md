# --------------------------------------
# TODO
# --------------------------------------

1.  Create functionality to Add/Remove state
    - Add: Create new addBiz component 
    - Remove
2.  Create authentication and conditional rendering (specifically for add/remove)
3.  Integrate Google Maps API


# --------------------------------------
# Tips / Explained
# --------------------------------------

State > Reducers > Store >
App.js > Provider > Router >
Container > Component (listings) >

'state.js' & 'reducers.js' get married in the 'store.js'
Containers: Marries 'mapStateToProps' & 'components'


actions (type) > 
reducers (type logic) > 
containers (mapDispatchToProps) > 
component(Action Implementation)