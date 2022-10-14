import MainS from '../../Componentes/MainS';
import MainE from '../../Componentes/MainE';
import Header from '../../Componentes/Topo';
import Footer from '../../Componentes/Footer';

import './style-page2.css';

export default function Page2 () {
    return (
        <body>
            <Header/>
            <main className='mainpage limita-secao'>
                <MainE/>
                <MainS/>
            </main>
            <Footer/>
        </body>
    )
}