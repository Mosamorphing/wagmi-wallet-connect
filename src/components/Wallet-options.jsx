import * as React from 'react';
import { useConnect } from 'wagmi';

export function WalletOptions() {
    const { connectors, connect } = useConnect();

    return (
        <div className="container"> 
            {connectors.map((connector) => (
                <WalletOption 
                    key={connector.id}
                    connector={connector}
                    onClick={() => connect({ connector })}
                />
            ))}
        </div>
    );
}


function WalletOption({ connector, onClick }) {
    const [ready, setReady] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            const provider = await connector.getProvider();
            setReady(!!provider);
        })();
    }, [connector]);

    return (
        <button onClick={onClick} disabled={!ready}>
            {connector.name}
        </button>
    );
}