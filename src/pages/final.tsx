import estilos from './final.module.css';
import img8 from '../assets/simb8.jpg';
import kirb from '../assets/kirb.jpg';
import link from '../assets/Benvenuto.pdf';

const final = () => {
    return (
        <div className={estilos.container}>
            <img src={img8} className={estilos.imagem} />
            <h1 className={estilos.para}>Parabéns!</h1>
            <img src={kirb} className={estilos.kirb} />
            <h4 className={estilos.text}>Agora entre nesse link nada suspeito:</h4>
            <a href={link} className={estilos.link} >aqui</a>
        </div>
    )
}
export default final;