function EsempioConProps(props: { nome: string, cognome: string }) {
    // ({nome: string, cognome: string})
    const nome = props.nome;
    const cognome = props.cognome;
    
    return (
        <>
        <div>
            <h1>Esempio in React</h1>
            <p>Ciao {nome} {cognome}</p>
        </div>
        </>
    )
}

export default EsempioConProps

