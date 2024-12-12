import { useState } from 'react'

function LandlordRatingForm({ landlord, setLandlord }) {

    const [rating, setRating] = useState(1)

    async function handleSubmit(event) {
        event.preventDefault()

        const response = await fetch(`http://localhost:5555/landlords/${landlord.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify( { rating } )
        })

        if (response.ok) {
            const editedLandlord = await response.json()
            setLandlord( editedLandlord )
            setRating( 1 )
        } else {
            alert("SOMETHING WENT WRONG")
        }
    }

    return (
        <form onSubmit={ handleSubmit }>

            <select
            onChange={event => setRating(event.target.value)}
            value={rating}>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
                <option value={4}>Four</option>
                <option value={5}>Five</option>
            </select>

            <input type="submit" value="Update Rating"/>

        </form>
    )
}

export default LandlordRatingForm