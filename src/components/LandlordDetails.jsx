import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function LandlordDetails() {

    const params = useParams()

    const [landlord, setLandlord] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)

    async function getLandlord() {
        const response = await fetch(`http://localhost:5555/landlords/${params.id}`)
        if (response.ok) {
            const data = await response.json()
            setLandlord(data)
        } else if (response.status === 404) {
            setErrorMessage("404 that landlord was not found...")
        }
    }

    useEffect(() => {
        getLandlord()
    }, [])

    if (errorMessage) {
        return (
            <h1>{ errorMessage }</h1>
        )
    }

    const mappedViolations = landlord?.violations?.map(violation => (
        <div key={violation.id}>
            <p>{violation.case_number}</p>
            <p>{violation.description}</p>
            <p>{violation.litigation_for_violation}</p>
        </div>
    ))

    return (
        <div>
            <h1>{landlord.associated_llcs}</h1>
            { mappedViolations }
        </div>
    )
}

export default LandlordDetails