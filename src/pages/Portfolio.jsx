import { useEffect, useState} from 'react'
import { Header } from '../components/Header'
import homeImg from '../assets/portfolio.svg'
import Axios from 'axios'
export function Portfolio(){
    const[github, setGithub]=useState([])
    useEffect(()=> {
        async function pegaDados(){
            const resposta= await Axios.get('https://api.github.com/users/Luana-s/repos',target="_blank")
            console.log(resposta.data.results)
        }
        pegaDados()
    }, [])
        return(
        <>

        <Header text="Meu Portfolio✔️" image={homeImg} />

        {github.map(repositorio => {
            return(
                <p key={repositorio.name}>{repositorio.name}</p>
            )

        })}
        </>
        )
}