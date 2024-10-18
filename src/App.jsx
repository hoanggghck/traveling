import { RouterProvider } from 'react-router-dom'
import { GlobalStyle } from './style'
import { router } from './router'

function App() {


  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}

export default App
