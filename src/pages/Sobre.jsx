import { Header } from '../components/Header'
import luanaImg from '../assets/Luana.jpeg'
import styles from '../styles/pages/sobre.module.css'




export function Sobre(){
    return(
        <>
         <Header text="Sobre" image={luanaImg}  />

        <section className={styles.card}>
            <div>
                <h1 className={styles.name}>Luana Silva,</h1>
                <br/>
                <p className={styles.texto}>Olá, sou de Alagoas, tenho 21 anos. Sempre fui apaixonada por tecnologia, que mim desperta um desejo de mergulhar em coisas novas, desafios. </p>
                <br/>
                <p className={styles.texto}>Atualmente faço Ciências da Computação e busco também outros conhecimentos relacionados a tecnologia!</p>
               
            </div> 
        </section>
         
        </>
    )
}