import { Envelope, Lock } from "phosphor-react";
import { Button } from "./Components/Button";
import { Checkbox } from "./Components/Checkbox";
import { Heading } from "./Components/Heading";
import { Text } from "./Components/Text";
import { TextInput } from "./Components/TextInput";
import Logo from "./Logo";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100">
      <header className="flex items-center flex-col">
        <Logo />

        <Heading size="lg" className="mt-4">
          {" "}
          Ignite Lab{" "}
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça Login e comece a usar
        </Text>
      </header>

      <form className="flex flex-col items-stretch mt-10 gap-4 w-full max-w-sm">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="password"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Digite sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembra-se de mim
          </Text>
        </label>

        <Button className="mt-4" type="submit">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild>
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild>
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
