/* eslint-disable react-refresh/only-export-components */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import {config} from './wagmi.js'
import {Account} from './components/Account-state.jsx'
import {WalletOptions} from './components/Wallet-options.jsx'

const queryClient = new QueryClient()
function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return (
    <div className="container"> 
      {isConnected ? <Account /> : <WalletOptions />}
    </div>
  );
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <ConnectWallet />
      </QueryClientProvider> 
    </WagmiProvider>
  )
}

export default App;