function Lista() {
    const lista = [
        { nome: "Valentina", cognome: "Borello", eta: 30 },
        { nome: "Kodjovi", cognome: "Devi", eta: 15 },
        { nome: "Manuel", cognome: "Gajoni", eta: 22 },
    ]

    return (
        <>
        {lista.filter(persona => persona.eta >= 18).map((elemento, indice) => {
            return <ListaComponent key={indice} elemento={elemento} />
        })}
        </>
    )
}
export default Lista;

function ListaComponent(props: { elemento: { nome: string, cognome: string, eta: number } }) {
    const nome = props.elemento.nome;
    const cognome = props.elemento.cognome;
    const eta = props.elemento.eta;

    function handleClick(){
        alert(`Hai cliccato su ${nome} ${cognome}`);
    }

    return (
        <div onClick={handleClick}>
            <p className = {eta>=18 ?"maggiorenne" : ''} >
            {nome} {cognome}, {eta>=18 ? 'Maggiorenne' : 'Minorenne'}</p>
            {nome==="Mario" && <p>Il nome è Mario</p>}
        </div>
    )

/* operatore ternario di sopra equivale a questo if-else
if(eta >= 18) {
    return (
        <div>
            <p>{nome} {cognome}, Maggiorenne</p>
        </div>
    )
} else {
    return (
        <div>
            <p>{nome} {cognome}, Minorenne</p>
        </div>
    )
}
*/


}

