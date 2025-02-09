import React from 'react'
import { Categories } from '../assets/Data'

const Home = () => {
  return (
    <div>
      <div>
        <div>
            <div>
                <div>
                    SHOP BY CATEGORIES
                </div>
                <ul>
                    {
                        Categories.map((category, index) => (
                            <li key={index}>
                                <div></div>
                                {category}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                    <img src="" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
