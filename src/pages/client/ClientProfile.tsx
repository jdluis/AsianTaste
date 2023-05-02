import { useState, useEffect, FC } from 'react';
import { useParams } from "react-router-dom";
/* interface ClientProfileProps { } */

const ClientProfile: FC/* <ClientProfileProps> */ = () => {
    const [message, setMessage] = useState('')
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMessage(`This number is ${number}`)
        } else {
            setMessage(`No Number given`)
        }
    }, [number])

    return (<div>
        <h2>Client ClientProfile</h2>
        <p>{message}</p>
    </div>);
}

export default ClientProfile;