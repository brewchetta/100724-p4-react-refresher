import React from 'react'
import { Link } from 'react-router-dom'

function LandlordCard({ landlord }) {
  return (
    <div>

      <Link to={`/landlords/${landlord.id}`}>
        <h3>{landlord.associated_llcs}</h3>
      </Link>

    </div>
  )
}

export default LandlordCard