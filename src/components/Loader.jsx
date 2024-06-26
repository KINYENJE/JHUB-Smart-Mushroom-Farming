import React from 'react'

const Loader = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500">
          <h1 className="sr-only">Loading...</h1>
        </div>
      </div>
    </div>
  )
}

export default Loader