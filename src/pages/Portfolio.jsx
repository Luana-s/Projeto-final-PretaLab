import { useEffect, useState} from 'react'
import { Header } from '../components/Header'
import homeImg from '../assets/portfolio.svg'

import styles from '../styles/pages/portfolio.module.css'

import Axios from 'axios'
export function Portfolio(){
    const [repositorios, setRepositorios] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/Luana-s/repos")
        .then(response => response.json())
        .then(Data => setRepositorios)
    }, [])
            
   
        return(
        <>

        <Header text="Meu Portfolio✔️" image={homeImg}/>

        <u>
            {repositorios.map(repository =>{
                return(
                    <li>
                        <h2>{repository.name}</h2>
                        <p>{repository.descrption}</p>

                    </li>
                )
            })}
        </u>


        <section>
            <div className={styles.card}>
                <h2 className={styles.title}>Projetos </h2>
                <br/>
                <br/>
                <div className={styles.cardProjeto1}>
                <h4>To do list</h4>
                <p className={styles.paragrafo}> Desenvolvi essa To-do-List nas aulas de JavaScript, do ciclo formativo da PRETALAB.</p>
                <button className={styles.botao}  type="button"><a href="https://to-do-list-23d372.netlify.app/"   target="_blank" >acesse</a></button>
                </div>
                
                <div className={styles.cardProjeto2}>
                <h4>Meu Portfolio</h4>
                <p className={styles.paragrafo}> Desenvolvi essa Portfólio nas aulas de HTML e CSS nas aulas de JavaScript, do ciclo formativo da PRETALAB.</p>
                <button className={styles.botao} type="button"><a href="https://portifolio-luana-silva.netlify.app/"   target="_blank" >acesse</a></button>
                </div>

                <div className={styles.cardProjeto2}>
                    <h4 >Página Login</h4>
                    <p className={styles.paragrafo}> Desenvolvi essa página de login com HTML e CSS.</p>
                    <button className={styles.botao} type="button"><a href="https://login-html-2c6fed.netlify.app/"   target="_blank" >acesse</a></button>
                </div>
            </div>
        </section>
   
        </>
        )
}