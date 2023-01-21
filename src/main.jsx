import React from 'react'
import ReactDOM from 'react-dom/client'
import { Portafolio } from './Portafolio'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import './index.css'

AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portafolio />
  </React.StrictMode>,
)
