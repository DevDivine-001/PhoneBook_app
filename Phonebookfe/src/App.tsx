import { mainRoutes } from "./router/mainRoutes"
import {RouterProvider} from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

let client= new QueryClient()

const App = () => {
  return (
    <div>
  <QueryClientProvider client={client}>
  <RouterProvider router={mainRoutes}/>
  </QueryClientProvider>
    </div>
  )
}

export default App
