import './App.css'
import EjemploLibreria from './components/EjemploLibreria'
import Title from './components/Title'
import TitleOrange from './components/TitleOrange'

function App() {

  return (
    <>
      <EjemploLibreria/>

      <div>
        <h1>Nuevo diseno</h1>

        <ul className='padre'>
          <li className='hijo-general'>
            <TitleOrange name='Consejo directivo'/>
            <ul className='sub-hijo'>
              <li className="hijo">
                <Title name='Oficina de Tecnologias de la Informacion'/>
                <ul className='sub-hijo'>
                  <li className="hijo">
                    <Title name='Area de desarollo de talento'/>
                  </li>
                  <li className="hijo">
                    <Title name='Area de administracion de personal'/>
                  </li>
                  <li className="hijo">
                    <Title name='Area de clima, cultura y comunicacion interna'/>
                    <ul className='sub-hijo'>
                      <li className="hijo">
                        <Title name='Unidad de Finanzas'/>
                      </li>
                      <li className="hijo">
                        <Title name='Unidad de Finanzas'/>
                      </li>
                      <li className="hijo">
                        <Title name='Area de administracion de personal'/>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="hijo">
                <Title name='Oficina de Tecnologias de la Informacion'/>
                <ul className='sub-hijo'>
                  <li className="hijo">
                    <Title name='Area de infraestructura tecnologica'/>
                  </li>
                  <li className="hijo">
                    <Title name='Area de ifnromatica y sitemas'/>
                  </li>
                </ul>
              </li>
              <li className="hijo">
                <Title name='Oficina de adminsitracion y finanzas'/>
                <ul className='sub-hijo'>
                  <li className="hijo">
                    <Title name='Unidad de abastecimiento'/>
                    <ul className='sub-hijo'>
                      <li className="hijo">
                        <Title name='Unidad de Finanzas'/>
                      </li>
                      <li className="hijo">
                        <Title name='Unidad de Finanzas'/>
                      </li>
                    </ul>
                  </li>
                  <li className="hijo">
                    <Title name='Unidad de Finanzas'/>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
