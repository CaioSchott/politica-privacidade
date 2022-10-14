import MainAC from '../../Componentes/MainAC';
import MainE from '../../Componentes/MainE';
import Header from '../../Componentes/Topo';
import Footer from '../../Componentes/Footer';

import './style-page3.css';

export default function Page3 () {
    return (
        <body>
            <Header/>
            <main className='mainpage limita-secao'>
                <MainE/>
                <MainAC/>
            </main>
            <Footer/>
        </body>
    )
}