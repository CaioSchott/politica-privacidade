import MainP from '../../Componentes/MainP';
import MainE from '../../Componentes/MainE';
import Header from '../../Componentes/Topo';
import Footer from '../../Componentes/Footer';

import './style-page1.css';

export default function Page1 () {
    return (
        <body>
            <Header/>
            <main className='mainpage limita-secao'>
                <MainE/>
                <MainP/>
            </main>
            <Footer/>
        </body>
    )
}