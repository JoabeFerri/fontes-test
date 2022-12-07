import { Logo } from "../Logo";
import { Text } from "../components/Text"
import { InputText } from "../components/InputText"
import { Lock, User } from 'phosphor-react'
import { Button } from "../components/Button";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import api from "../services/api";

interface ProjectsProps {
  
}

export default function Projects(props: ProjectsProps) {

  return (
    // <h1 className="text-body-regular-md ">perfis: {props.count}</h1>
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-start text-high-00">
      <header className="flex flex-col items-center">
      <form  className="flex flex-col items-stretch w-full max-w-md mt-8 gap-4">
      <label htmlFor="username" className="flex flex-col gap-2">
          <Text size="text-body-regular-md" className="font-weight-regular">Digite o nome do projeto</Text>
          <InputText.Root>
            <InputText.Input id="title"
            placeholder="Digite seu username"/>
          </InputText.Root>
        </label>
        <div className="flex flex-row gap-6">
        <label htmlFor="cep" className="flex flex-col gap-2">
          <Text size="text-body-regular-md" className="font-weight-regular">Digite cep do projeto</Text>
          <InputText.Root>
            <InputText.Input
            type="text" maxLength={8} id="cep" placeholder="Digite sua senha"/>
          </InputText.Root>
        </label>

        <label htmlFor="cep" className="flex flex-col gap-2">
          <Text size="text-body-regular-md" className="font-weight-regular">Digite valor do projeto</Text>
          <InputText.Root>
            <InputText.Input
            type="number" maxLength={8} id="cep" placeholder="Digite sua senha"/>
          </InputText.Root>
        </label>
        </div>
        <Button className="mt-4">Criar projeto</Button>
      </form>

    
      </header>
      {/* onSubmit={loginUser} */}

      <footer className="flex flex-col items-center mt-4">

      </footer>

    </div>
  )
}
