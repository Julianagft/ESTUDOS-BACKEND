'use client'

import { useState } from "react";
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  // Conecta com a API;

  function onSubmit() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

      fetch('http://localhost:3001/emails/sendEmails', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
          name: nome,
          email: email
        }),
      });
      setNome("")
      setEmail("")
  }
  
  return (
    <>    
      <main className="flex min-h-screen flex-col items-center justify-center">
          <div className="h-[28rem] p-5 w-2/3 bg-cyan-600 rounded-lg flex">
            <div className="relative flex justify-center items-center bg-indigo-500 flex-[2] min-h-full rounded">
              <Image src='https://cdn-icons-png.flaticon.com/512/4939/4939994.png' alt="hero" layout="fill" objectFit="contain"
                className="rounded max-h-36 flex mt-20" />
            </div>

            <div className=" flex-[3] px-16 min-h-full flex flex-col text-white justify-center items-center gap-5">
              <h1 className="text-2x1">Se inscreva para receber novidades</h1>
              <p className="text-lg">Nunca mais se esqueça de comprar seus insumos semanais com qualidade de vida!</p>
              <input value={nome} onChange={(e) => setNome(e.target.value)} type="name" placeholder="Digite seu nome" className="w-full p-2 rounded text-blue-700" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu email" className="w-full p-2 rounded text-blue-700" />
              <button onClick={onSubmit} className="bg-indigo-500 p-4 rounded min-w-full">Inscrever</button>
            </div>
          </div>
     
      </main>
    </>
  );
}
