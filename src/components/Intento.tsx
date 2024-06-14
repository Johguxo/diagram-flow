import "./../App.css";
import Title from "./Title";
import TitleOrange from "./TitleOrange";

function Intento() {
  return (
    <>
      <div>
        <ul className="full-padre">
          <li className="section">
            <TitleOrange name="Consejo directivo" />
            <TitleOrange name="Presidencia ejecutiva" />
            <ul className="sub-hijo">
              <li className="hijo">
                <div className="punteado">
                  <li className="hijo-vertical">
                    <Title name="Area de desarollo de talento" />
                  </li>
                  <li className="hijo-vertical">
                    <Title name="Area de desarollo de talento" />
                  </li>
                  <li className="hijo-vertical">
                    <Title name="Area de desarollo de talento" />
                  </li>
                </div>
                <ul className="sub-hijo-vertical">
                  <li className="hijo-vertical">
                    <Title isClear={true} name="Area de desarollo de talento" />
                  </li>
                </ul>
              </li>
              <li className="hijo">
                <div className="punteado">
                  <li className="hijo-vertical">
                    <Title name="Area de desarollo de talento" />
                  </li>
                  <li className="hijo-vertical">
                    <Title name="Area de desarollo de talento" />
                  </li>
                  <li className="hijo-vertical">
                    <Title name="Area de desarollo de talento" />
                  </li>
                </div>
                <ul className="sub-hijo-vertical">
                  <li className="hijo-vertical">
                    <Title isClear={true} name="Secretaria tecnica de soluciones de emergencia" />
                  </li>
                </ul>
              </li>
              <li className="hijo">
                <Title name="Area de desarollo de talento" />
                <ul className="sub-hijo-vertical">
                  <li className="hijo-vertical">
                    <Title isClear={true} name="Secretaria tecnica de soluciones de emergencia" />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="section"></li>
          <li className="section"></li>
        </ul>
        <ul className="padre">
          <li className="hijo-general">
            <TitleOrange name="Gerencia General" />
            <ul className="sub-hijo">
              <li className="hijo">
                <Title name="Oficina de Tecnologias de la Informacion" />
                <ul className="sub-hijo">
                  <li className="hijo">
                    <Title name="Area de desarollo de talento" />
                  </li>
                  <li className="hijo">
                    <Title name="Area de administracion de personal" />
                  </li>
                  <li className="hijo">
                    <Title name="Area de clima, cultura y comunicacion interna" />
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
                <ul className="sub-hijo">
                  <li className="hijo">
                    <Title name="Area de infraestructura tecnologica" />
                  </li>
                  <li className="hijo">
                    <Title name="Area de ifnromatica y sitemas" />
                  </li>
                </ul>
              </li>
              <li className="hijo">
                <Title name="Oficina de adminsitracion y finanzas" />
                <ul className="sub-hijo">
                  <li className="hijo">
                    <Title name="Unidad de abastecimiento" />
                    <ul className="sub-hijo">
                      <li className="hijo">
                        <Title name="Unidad de Finanzas" />
                      </li>
                      <li className="hijo">
                        <Title name="Unidad de Finanzas" />
                      </li>
                    </ul>
                  </li>
                  <li className="hijo">
                    <Title name="Unidad de Finanzas" />
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

export default Intento;
