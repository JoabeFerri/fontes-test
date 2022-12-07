import { Logo } from "../Logo";
import { Text } from "../components/Text"
import { InputText } from "../components/InputText"
import { Lock, User } from 'phosphor-react'
import { Button } from "../components/Button";
import Link from "next/link";
import Login from "./login";
import { AuthContextProvider } from "../context/AuthContext";

interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {

  return (
    // <h1 className="text-body-regular-md ">perfis: {props.count}</h1>
    <AuthContextProvider>
      <Login/>
    </AuthContextProvider>
  )
}
