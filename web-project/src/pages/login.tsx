import { Logo } from "../Logo";
import { Text } from "../components/Text"
import { InputText } from "../components/InputText"
import { Lock, User } from 'phosphor-react'
import { Button } from "../components/Button";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import api from "../services/api";

interface LoginProps {
  
}

export default function Login(props: LoginProps) {

  const { singIn, user } = useAuth();
  console.log('DADOS USER:', user)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [data, setData] = useState("")

  async function loginUser(event: FormEvent) {
    event.preventDefault()

    


    try {
      const response = await api.post('/api/users/login', {
        username: username,
        password: password,
      })

      

      console.log("TA INDO CARALHO")
      
    } catch (err) {
      console.log(err)
      alert('Falha ao criar perfil, usuario já existe')
    }
  }

  return (
    // <h1 className="text-body-regular-md ">perfis: {props.count}</h1>
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center text-high-00">
      <header className="flex flex-col items-center">

        <Logo/>
        <Text size="text-title-lg" className="mt-4">Projects</Text>
        <Text size="text-body-regular-md" className="text-high-30 mt-2">Faça login e crie projetos e muito mais</Text>
      </header>
      {/* onSubmit={loginUser} */}
      <form  className="flex flex-col items-stretch w-full max-w-sm mt-8 gap-4">
        <label htmlFor="username" className="flex flex-col gap-2">
          <Text size="text-body-regular-md" className="font-weight-regular">Digite seu usuário</Text>
          <InputText.Root>
            <InputText.Icon>
              <User/>
            </InputText.Icon>

            <InputText.Input id="username" onChange={(e) => setUsername(e.target.value)} value={ username } 
            placeholder="Digite seu username"/>
          </InputText.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-2">
          <Text size="text-body-regular-md" className="font-weight-regular">Digite seu usuário</Text>
          <InputText.Root>
            <InputText.Icon>
              <Lock/>
            </InputText.Icon>

            <InputText.Input onChange={(e) => setPassword(e.target.value)} value={ password } 
            type="password" id="password" placeholder="Digite sua senha"/>
          </InputText.Root>
        </label>

        <Button onClick={singIn} className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center mt-4">
        <Text asChild size="text-body-regular-md">
          <Link href="/singIn" className=" text-low-50 underline">Clique aqui para criar conta!</Link>
        </Text>
      </footer>

    </div>
  )
}
