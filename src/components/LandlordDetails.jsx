import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LandlordRatingForm from './LandlordRatingForm'

function LandlordDetails() {

    const params = useParams()
    const navigate = useNavigate()

    const [landlord, setLandlord] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)

    async function handleDelete() {
        const response = await fetch(`http://localhost:5555/landlords/${landlord.id}`, { method: 'DELETE' })

        if (response.ok) {
            navigate('/')
        } else {
            setErrorMessage("That didn't work something went wrong")
        }
    }

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

            <LandlordRatingForm landlord={landlord} setLandlord={setLandlord} />

            <p>Rating: {landlord.rating}</p>

            <button onClick={handleDelete}>Delete Landlord</button>

            { mappedViolations }
        </div>
    )
}

export default LandlordDetails