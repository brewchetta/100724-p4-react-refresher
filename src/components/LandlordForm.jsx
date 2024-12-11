import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LandlordForm() {

    const navigate = useNavigate()

    const [llc, setLLC] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        
        const response = await fetch('http://localhost:5555/landlords', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify( { 
                associated_llcs: llc,
            } )
        })
        
        if (response.ok) {
            navigate('/')
        } else {
            alert("Something went wrong...")
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2>Add New Landlord</h2>

            <input type="text"
            placeholder="associated llcs"
            value={llc}
            onChange={ (event) => setLLC(event.target.value) }
            />

            <br/>

            <input 
            type="submit" 
            value="Submit Landlord for Mocking"/>

        </form>
    )

}

export default LandlordForm