import React from 'react'

const Header = () => {
    
  return (
    <header>
        <h1>
            Groceries List
        </h1>
    </header>
  )
}
Header.defaultProps={
  title: "Default title"
}
export default Header