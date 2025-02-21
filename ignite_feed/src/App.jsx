import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from './components/Button';
import { Header } from './components/Header';
import styles from "./App.module.css";
import { SideBar } from './components/SideBar';
import { Post } from './components/Post';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main className={styles.posts}>
          <Post
            nome="Deivyson Ricardo"
            cargo="Web Developer"
            img="https://avatars.githubusercontent.com/u/131066052?v=4"
            time="1h"
            post={(<>
                <p>
                Fala galeraa 👋
                </p>
                <p>
                Acabei de Fazer meu primeiro site usando ReactJs!
                </p>
                
                <p>
                    <a href="#">#laele</a> <a href="#">#borabill</a> <a href="#">#minecraft</a> 
                </p>  
            </>)}
          />

<Post
            nome="Generic Man"
            cargo="Desenvolvedor Genérico"
            img="https://static.vecteezy.com/system/resources/thumbnails/047/411/954/small/smiling-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background-free-photo.jpg"
            time="1d"
            post={(<>
            <p>
            Fala galeraa 👋
                </p>
                <p>
                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p>
                👉 <a href="jane.design/doctorcare">jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a> 
                </p>  
            </>)}
          />
          
        </main>
      </div>

    </>
  )
}
                