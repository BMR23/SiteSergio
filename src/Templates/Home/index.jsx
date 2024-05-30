// import { Menu } from '@components/Menu';
import './styles.css';
import { ImageSlider } from '@components/ImageSlider';
import { introImages } from './img/Intro';
// Alterar o tipo das imagens para WebP - mantém qualidade e diminui tamanho do arquivo, ideal já que temos muitas fotos

export const Home = () => {
    return (
        <div className='container-all'>
        {/* <Menu /> */}
        <ImageSlider images={introImages} autoplay/>
        
        <section>
            <h2>Quem somos</h2>
        </section>

        <section>
            <h2>Opções</h2>
            <div>
                <h3>Ônibus executivos G7 - 2015/2016</h3>
                {/* <ImageSlider /> */}
                {/* Lista de onibus com links para mais detalhes */}
            </div>
            <div>
                <h3>Vans luxo - 2015/2016</h3>
            </div>
            <div>
                <h3>Carros luxo</h3>
            </div>
            <div>
                <h3>Helicópteros luxo</h3>
            </div>
            <div>
                <h3>Jatos super luxo</h3>
            </div>
        </section>

        <section>
            <h2>Diferença de poltrona de ônibus</h2>
        </section>

        <section>
            <h2>Contato</h2>
            <p>
                Facebook
            </p>
        </section>


        </div>
    )
}