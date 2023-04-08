import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import Errors from './Errors'


function App() {
  return (
    <div><ErrorBoundary>
       <Errors a={["chocalate","icecream","fruits","Cookies"]}/>
      </ErrorBoundary></div>
  )
}

export default App
