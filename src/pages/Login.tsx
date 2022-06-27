import { useAuth0 } from "@auth0/auth0-react";

import { Header } from "../components/Header";
import { UserCircle } from "phosphor-react";

export function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex items-center justify-center mt-20 mx-auto">
          <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block text-center">
              Faça seu login
            </strong>

            <div className="flex flex-col gap-2 w-full">
              <button 
                className="flex items-center justify-center gap-2 mt-4 py-4 font-bold uppercase rounded bg-green-500 hover:bg-green-700 transition-colors"
                type="button"
                onClick={() => {loginWithRedirect()}} 
              >
                <UserCircle size={32} />
                Login
              </button>

              <p className="text-center mt-4">Você pode fazer login utilizando uma conta do <strong>Gmail</strong> ou <strong>Github</strong></p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
