import { useState } from "react"

function ItemCounter() {

    let [contador,setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const resetear = () => {
        setContador(0)
    }

    return (
        <main className="p-2 grow">
            <p>Contador : {contador}</p>
            <button className="border p-1 rounded" onClick={sumar}>+</button>
            <button className="border p-1 rounded" onClick={restar}>-</button>
            <button className="border p-1 rounded" onClick={resetear}>Eliminar Carrito</button>
        </main>
    )
}

export default ItemCounter