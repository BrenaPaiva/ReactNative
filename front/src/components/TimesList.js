import React from "react";

export default function TimesList(props) {
    return (
        <>
            {
                props.times.map((time) =>
                    <li key={time.id}>{time.nome} - {time.descricao}</li>
                )
            }
        </>
    )



}