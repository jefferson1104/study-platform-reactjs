import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react";

import { client } from "./lib/apollo"
import { Router } from "./Router"

function App() {

  return (
    <div>
      <ApolloProvider client={client}>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTH_DOMAIN}
          clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
          redirectUri={window.location.origin + '/event'}
        >
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Auth0Provider>  
      </ApolloProvider>
    </div>
  )
}

export default App
