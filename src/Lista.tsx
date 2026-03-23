function Lista() {
    const lista = [
        { nome: "Mario", cognome: "Rossi", eta: 30 },
        { nome: "Luigi", cognome: "Verdi", eta: 15 }
    ]

    return (
        lista.map((elemento, indice) => {
            return 
            <ListaComponent key={indice} elemento={elemento} />
        }
    )
}
export default Lista;

function ListaComponent(props: { elemento: { nome: string, cognome: string, eta: number } }) {
    const nome = props.elemento.nome;
    const cognome = props.elemento.cognome;
    const eta = props.elemento.eta;

    return (
        <div>
            <p>{nome} {cognome}, {eta>=18 ? 'Maggiorenne' : 'Minorenne'}</p>
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