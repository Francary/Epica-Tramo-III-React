import { useUsername } from "../../../providers/UsernameProvider.jsx"

const ComponentD = () => {
    const username = useUsername()
    return(
        <>
        <p>Componente D: {username}</p>
        </>
    )
}

export {ComponentD}