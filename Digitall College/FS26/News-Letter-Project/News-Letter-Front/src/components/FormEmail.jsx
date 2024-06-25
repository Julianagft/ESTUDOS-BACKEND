'use client'
import { useState } from "react";
import {toast, ToastContainer} from "react-toastify"


export default function formEmail() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');



  async function onSubmit() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', 'meutoken');


    try{
        const r = await fetch('http://localhost:3001/emails/registerEmails', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
          name: nome,
          email: email
        }),
      });

      if (r.status !== 200 && r.status !== 201) {
        throw new Error((await r.json()).message)
      }

      setNome("")
      setEmail("")

      toast.success('Inscrição realizada com sucesso!')
    } catch (error) {

        if (error.message === "Preencha todos os campos para prosseguir!") {
            return toast.error('Preencha todos os campos para prosseguir!')
        } else if (error.message === "Email já cadastrado!") {
            
            return toast.error('Email já cadastrado!')
        }
         
        return toast.error('Erro ao se inscrever, tente novamente mais tarde!')
    }
      
  }
    return (
        <>
            <ToastContainer />
            <input value={nome} onChange={(e) => setNome(e.target.value)} type="name" placeholder="Digite seu nome" className="w-full p-2 rounded text-blue-700" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu email" className="w-full p-2 rounded text-blue-700" />
            <button onClick={onSubmit} className="bg-indigo-500 p-4 rounded min-w-full">Inscrever</button>

        </>
    )
}