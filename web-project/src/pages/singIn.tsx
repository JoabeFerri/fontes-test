import { Logo } from "../Logo";
import { Text } from "../components/Text"
import { InputText } from "../components/InputText"
import { Lock, User } from 'phosphor-react'
import { Button } from "../components/Button";
import Link from "next/link";

import api from '../services/api'
import { FormEvent, useEffect, useState } from "react";

interface SignInProps {
  
}

export default function SignIn(props: SignInProps) {

  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")


  async function createUser(event: FormEvent) {
    event.preventDefault()

    try {
      const response = await api.post('/api/users', {
        username: username,
        name: name,
        password: password,
      })

      const { id } = response.data

      console.log(response.data)
      
    } catch (err) {
      console.log(err)
      alert('Falha ao criar perfil, usuario já existe')
      setUsername('')
    }
  }
  
  
  return (
    // <h1 className="text-body-regular-md ">perfis: {props.count}</h1>
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center text-high-00">
      <header className="flex flex-col items-center">

        <Text size="text-body-regular-md" className="text-high-30 mt-2">Faça login e crie projetos e muito mais</Text>
      </header>

      <form onSubmit={createUser} className="flex flex-col items-stretch w-full max-w-sm mt-6 gap-4">
        <label htmlFor="username" className="flex flex-col gap-2">
          <Text size="text-body-regular-md" className="font-weight-regular">Digite seu usuário</Text>
          <InputText.Root>
            <InputText.Icon>
              <User/>
            </InputText.Icon>

            <InputText.Input onChange={(e) => setUsername(e.target.value)} value={ username } 
            id="username" placeholder="Digite seu username"/>
          </InputText.Root>
          <Text size="text-body-regular-sm" className="text-low-50">O nome escolhido nesse campo será utilizado para login</Text>
        </label>

        <label htmlFor="name" className="flex flex-col gap-2">
          <Text size="text-body-regular-md" className="font-weight-regular">Digite seu nome completo</Text>
          <InputText.Root>
            <InputText.Input onChange={(e) => setName(e.target.value)} value={ name } id="name" placeholder="Digite seu nome completo"/>
          </InputText.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-2">
          <Text size="text-body-regular-md" className="font-weight-regular">Digite seu senha</Text>
          <InputText.Root>
            <InputText.Icon>
              <Lock/>
            </InputText.Icon>

            <InputText.Input onChange={(e) => setPassword(e.target.value)} value={ password } 
            type="password" id="password" placeholder="Digite sua senha"/>
          </InputText.Root>
        </label>

        <Button className="mt-4" type="submit">Criar conta</Button>
      </form>

      <footer className="flex flex-col items-center mt-4">
        <Text asChild size="text-body-regular-md">
          <Link href="/login" className=" text-low-50 underline">Voltar para Login</Link>
        </Text>
      </footer>

    </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/users/count')
//   const data = await response.json()

//   return {
//     props:{
//       count: data.findUsers,
//     }
//   }
// }
