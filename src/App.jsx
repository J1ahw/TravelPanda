import React from 'react';
import './App.css';
import { HeaderRow } from './components/headerRow';
import { VideoContainer } from './components/videoContainer';
import { Packages } from './components/packages';
import { Book } from './components/book';
import { Contact } from './components/contact';
import { Footer } from './components/footer';


export default function App() {

  return (
    <>
      <HeaderRow />
      
      <VideoContainer />

      <Packages />

      <Book />

      <Contact />
      
      <Footer />
    </>
  );
}
