import { useAuth0 } from '@auth0/auth0-react';
import { useState, FC } from 'react';

/* interface ClientProfileProps { } */

const ClientProfile: FC/* <ClientProfileProps> */ = () => {
    const { user } = useAuth0();


    return (<div>
        <h2>Client {user?.name}</h2>

        <div>
            <h3>Lista Reservas</h3>
            <ul>
                <li>1</li>
            </ul>
        </div>

        <div>
            <h3>ºPedidos en local</h3>

            <ul>
                <li>1</li>
            </ul>
        </div>

    </div>);
}

export default ClientProfile;