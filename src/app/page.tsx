import React from 'react';
import Navbar from './components/Navbar';
import SarkacMotion from './components/SarkacMotion';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="space-y-32 py-20">
        <SarkacMotion/>
        <div style={{ height: "20vh" }} />
      </main>
    </div>
  );
}
