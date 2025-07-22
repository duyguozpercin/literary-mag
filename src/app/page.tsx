import React from 'react';
import Navbar from './components/Navbar';
import SarkacMotion from './components/SarkacMotion';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="space-y-32 py-20">
        <h1 className="text-center text-3xl font-bold">Scroll ile Demo</h1>
        <h1 className="text-center text-3xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio alias vel! Reprehenderit ex a ratione error quisquam voluptate maxime excepturi impedit corporis odit iste non, maiores quas. Asperiores, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum sed deserunt. Eum dolorum obcaecati commodi eaque voluptatum fugit quas exercitationem, quos tenetur, facilis laudantium quo, et explicabo voluptatem ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia modi eligendi repellendus consequatur dignissimos? Placeat iste numquam excepturi similique aliquam repellendus iusto provident deserunt perspiciatis culpa? Ex quas aut ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores impedit perferendis ipsum aspernatur eius unde. Totam accusamus dolor necessitatibus! Doloribus unde vel doloremque perferendis est hic, ipsam possimus recusandae!</h1>
        <h1 className="text-center text-3xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio alias vel! Reprehenderit ex a ratione error quisquam voluptate maxime excepturi impedit corporis odit iste non, maiores quas. Asperiores, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum sed deserunt. Eum dolorum obcaecati commodi eaque voluptatum fugit quas exercitationem, quos tenetur, facilis laudantium quo, et explicabo voluptatem ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia modi eligendi repellendus consequatur dignissimos? Placeat iste numquam excepturi similique aliquam repellendus iusto provident deserunt perspiciatis culpa? Ex quas aut ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maiores impedit perferendis ipsum aspernatur eius unde. Totam accusamus dolor necessitatibus! Doloribus unde vel doloremque perferendis est hic, ipsam possimus recusandae!</h1>

        <SarkacMotion />
        <div style={{ height: "20vh" }} />
      </main>
    </div>
  );
}
