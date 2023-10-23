import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const theme = extendTheme({
  styles: {
    global: {
      body: {
        transition: "background-color 1s linear" ,
        color :"1s linear"
      },
    },
  },
});

export default theme;
// 3. extend the theme

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
