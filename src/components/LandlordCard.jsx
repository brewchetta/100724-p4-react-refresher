import React from 'react'

function LandlordCard({ landlord }) {
  return (
    <div>
        <h3>{landlord.associated_llcs}</h3>
        <p>{landlord.violations}</p>
    </div>
  )
}

export default LandlordCard