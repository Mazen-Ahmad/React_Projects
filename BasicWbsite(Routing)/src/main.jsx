import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Routes, Route, createRoutesFromElements, RouterProvider } from 'react-router';
import './index.css'
import Layout from './layout';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import User from '../components/User';
import Github, {githubInfoLoader} from '../components/Github';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:id" element={<User/>}/>
      <Route path="github" element={<Github/>} loader={githubInfoLoader}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>} >
//           <Route path="" element={<Home/>}/>
//           <Route path="about" element={<About/>}/>              (PROBLEM WHEN USING LOADER)
//           <Route path="contact" element={<Contact/>}/>
//           <Route path="user/:id" element={<User/>}/>
//           <Route loader={githubInfoLoader} path="github" element={<Github/>}/>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// )
