import React from 'react'
import { useSelector } from 'react-redux'

const FilterData = () => {
    const filterProducts = useSelector(state => state.product.filteredData)
  return (
    <div>
      
    </div>
  )
}

export default FilterData
