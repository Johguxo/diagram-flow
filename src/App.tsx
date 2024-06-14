import "./App.css";
import EjemploLibreria from "./components/EjemploLibreria";
import Intento from "./components/Intento";
import Title from "./components/Title";
import TitleOrange from "./components/TitleOrange";

function App() {
  const test = false;
  const intento = false;
  return (
    <>
      {test && <EjemploLibreria />}
      {intento && <Intento />}
      <div>
        <ul className="padre">
          <li className="hijo-general section-a">
            <TitleOrange name="Consejo directivo" />
            <TitleOrange name="Presidencia ejecutiva" />
            <ul className="sub-hijo-sections">
              <div className="left-section">
              <li className="hijo">
                <div className="punteado">
                  <li className="hijo-vertical">
                    <Title
                      noMargin={true}
                      name="Area de desarollo de talento"
                    />
                  </li>
                  <li className="hijo-vertical">
                    <Title
                      noMargin={true}
                      name="Area de desarollo de talento"
                    />
                  </li>
                  <li className="hijo-vertical">
                    <Title
                      noMargin={true}
                      name="Area de desarollo de talento"
                    />
                  </li>
                </div>
                <ul className="sub-hijo-vertical">
                  <li className="hijo-vertical">
                    <Title
                      noMargin={true}
                      isClear={true}
                      name="Area de desarollo de talento"
                    />
                  </li>
                </ul>
              </li>
              </div>
              <div className="right-section">
              <li className="hijo">
                <div className="punteado">
                  <li className="hijo-vertical">
                    <Title
                      noMargin={true}
                      name="Area de desarollo de talento"
                    />
                  </li>
                  <li className="hijo-vertical">
                    <Title
                      noMargin={true}
                      name="Area de desarollo de talento"
                    />
                  </li>
                  <li className="hijo-vertical">
                    <Title
                      noMargin={true}
                      name="Area de desarollo de talento"
                    />
                  </li>
                </div>
                <ul className="sub-hijo-vertical">
                  <li className="hijo-vertical">
                    <Title
                      noMargin={true}
                      isClear={true}
                      name="Secretaria tecnica de soluciones de emergencia"
                    />
                  </li>
                </ul>
              </li>
              <li className="hijo">
                <Title name="Area de desarollo de talento" />
                <ul className="sub-hijo-vertical">
                  <li className="hijo-vertical">
                    <Title
                      noMargin={true}
                      isClear={true}
                      name="Secretaria tecnica de soluciones de emergencia"
                    />
                  </li>
                </ul>
              </li>
              </div>
              
              
            </ul>
          </li>
          <li className="hijo-general section-b">
            <TitleOrange name="Gerencia General" />
            <ul className="sub-hijo-sections">
              <div className="left-section">
                <li className="hijo">
                  <Title name="Oficina de Tecnologias de la Informacion" />
                  <ul className="sub-hijo-vertical">
                    <li className="hijo-vertical">
                      <Title
                        name="Area de desarollo de talento"
                        noMargin={true}
                      />
                    </li>
                    <li className="hijo-vertical">
                      <Title
                        name="Area de administracion de personal"
                        noMargin={true}
                      />
                    </li>
                    <li className="hijo-vertical">
                      <Title
                        name="Area de clima, cultura y comunicacion interna"
                        noMargin={true}
                      />
                      <ul className="sub-hijo-vertical">
                        <li className="hijo-vertical">
                          <Title name="Unidad de Finanzas" noMargin={true} />
                        </li>
                        <li className="hijo-vertical">
                          <Title name="Unidad de Finanzas" noMargin={true} />
                        </li>
                        <li className="hijo-vertical">
                          <Title
                            name="Area de administracion de personal"
                            noMargin={true}
                          />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="hijo">
                  <Title name="Oficina de Tecnologias de la Informacion" />
                  <ul className="sub-hijo-vertical">
                    <li className="hijo-vertical">
                      <Title
                        name="Area de infraestructura tecnologica"
                        noMargin={true}
                      />
                    </li>
                    <li className="hijo-vertical">
                      <Title
                        name="Area de ifnromatica y sitemas"
                        noMargin={true}
                      />
                    </li>
                  </ul>
                </li>
              </div>
              <div className="right-section">
                <li className="hijo">
                  <Title name="Oficina de Tecnologias de la Informacion" />
                  <ul className="sub-hijo-vertical">
                    <li className="hijo-vertical">
                      <Title
                        name="Area de infraestructura tecnologica"
                        noMargin={true}
                      />
                    </li>
                    <li className="hijo-vertical">
                      <Title
                        name="Area de ifnromatica y sitemas"
                        noMargin={true}
                      />
                    </li>
                  </ul>
                </li>
                <li className="hijo">
                  <Title name="Oficina de adminsitracion y finanzas" />
                  <ul className="sub-hijo-vertical">
                    <li className="hijo-verttical">
                      <Title name="Unidad de Finanzas" noMargin={true} />
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
          <li className="hijo-general section-c">
            <ul className="sub-hijo">
                <li className="hijo">
                  <Title name="Oficina de Tecnologias de la Informacion" />
                  <ul className="sub-hijo-vertical">
                    <li className="hijo-vertical">
                      <Title
                        name="Area de desarollo de talento"
                        noMargin={true}
                      />
                    </li>
                    <li className="hijo-vertical">
                      <Title
                        name="Area de administracion de personal"
                        noMargin={true}
                      />
                    </li>
                    <li className="hijo-vertical">
                      <Title
                        name="Area de clima, cultura y comunicacion interna"
                        noMargin={true}
                      />
                    </li>
                  </ul>
                </li>
                <li className="hijo">
                  <Title name="Oficina de Tecnologias de la Informacion" />
                  <ul className="sub-hijo-vertical">
                    <li className="hijo-vertical">
                      <Title
                        name="Area de infraestructura tecnologica"
                        noMargin={true}
                      />
                    </li>
                    <li className="hijo-vertical">
                      <Title
                        name="Area de ifnromatica y sitemas"
                        noMargin={true}
                      />
                    </li>
                  </ul>
                </li>
                <li className="hijo">
                  <Title name="Oficina de Tecnologias de la Informacion" />
                  <ul className="sub-hijo-vertical">
                    <li className="hijo-vertical">
                      <Title
                        name="Area de infraestructura tecnologica"
                        noMargin={true}
                      />
                    </li>
                    <li className="hijo-vertical">
                      <Title
                        name="Area de ifnromatica y sitemas"
                        noMargin={true}
                      />
                    </li>
                  </ul>
                </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
