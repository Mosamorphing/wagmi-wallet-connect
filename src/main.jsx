import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  { WagmiProvider} from 'wagmi'
import { config } from './wagmi.js' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WagmiProvider config={config}>
    <App />
    </WagmiProvider>
  </StrictMode>,
)
