import { useAuth0 } from "@auth0/auth0-react";
import { useParams, useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>()
  const { user } = useAuth0();

  if(!user){
    navigate('/login')
  }

  console.log('CONSOLANDO USER', user)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug 
          ? <Video lessonSlug={slug} /> 
          : (
            <div className="flex-1 flex items-center justify-center min-h-screen">
              <span className="text-3xl">
                Ao lado direito, selecione uma aula ao lado para começar o aprendizado 👉
              </span>
            </div>
            )
        }
        <Sidebar />
      </main>
    </div>
  )
}