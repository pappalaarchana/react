import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Our dishes are crafted using locally sourced, fresh ingredients to ensure every meal is nutritious and delicious. Explore a wide variety of cuisines, from classic comfort foods to exotic international dishes, catering to all taste preferences and dietary needs.</p>
            <button>View Menu</button>
        </div>
      
    </div>
  )
}

export default Header
