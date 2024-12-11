import { useState, useEffect } from 'react'
import LandlordCard from './LandlordCard'
import { Link } from 'react-router-dom'

function AllLandlords() {

    const [landlords, setLandlords] = useState( [] )

    async function getLandlordz() {
        const response = await fetch('http://localhost:5555/landlords')
        const data = await response.json()
        setLandlords( data )
    }

    useEffect(() => {
        getLandlordz()
    }, [])

    return (
        <div>
            <h1>All the Landlords</h1>
            <Link to="/add-new-landlord">Add New Landlord</Link>
            { landlords.map( landlord => <LandlordCard key={landlord.id} landlord={landlord} /> ) }
        </div>
    )
}

export default AllLandlords