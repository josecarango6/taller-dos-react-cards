import React from 'react'

const Mensaje = ({children, tipo}) => {
    return (
        <div className={`alerta ${tipo}`}>{children}</div>//la clase alerta esta en el css y le inyectamos el tipo, clildren es todo el mensaje
    )
}

export default Mensaje
