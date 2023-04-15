import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random()*3);
        return(
          names[int]
        )
      };
  return (
    <main>
       <h3>
            Hello {handleNameChange()}
       </h3>
    </main>
  )
}

export default Content