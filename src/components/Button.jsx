const Button = ( {children , texto = "Valor x Default", variante = "blue", onClick, oculto}) => {

    if(oculto) return null 
    
    let color = ""
    if ( variante === "blue") color = "btn-primary"
    if ( variante === "green") color = "btn-success"
    if ( variante === "red") color = "btn-danger"
    
    return (
        <button onClick={onClick} className={"btn " + color}>{ children || texto }</button>
    )
}

export {Button}