// Hooks
import { useState } from "react";

// CSS
import "./SelectOption.css";

// Components
import CursosTecnicos from "../Forms/CursosTecnicos";
import Escolas from "../Forms/Escolas";
import FaculdadesForm from "../Forms/FaculdadesForm";
import PosGraudacao from "../Forms/PosGraudacao";
import Idiomas from "../Forms/Idiomas";
import Preparatorio from "../Forms/Preparatorio";
import CursosLivres from "../Forms/CursosLivres";
import Eja from "../Forms/Eja";
import PreEnem from "../Forms/PreEnem";

const SelectOption = () => {
  const [componentsString, setComponentsString] = useState("faculdades");

  const selectForm = (e) => {
    setComponentsString(e.target.value);

    const radios = document.querySelectorAll("input[name='formSelector']");
    radios.forEach((rad) => {
      const newClass = "." + rad.id;
      const label = document.querySelector(newClass);

      if (rad.checked) {
        label.classList.add("white");
      } else {
        label.classList.remove("white");
      }
    });
  };
  return (
    <main>
      <div className="option_Container">
        <div className="option_left">
          <h3 className="options_h3_mobile">O que desejar estudar?</h3>
          <div className="option_content">
            <h3 className="options_h3_desktop">O que desejar estudar?</h3>
            <i className="bi bi-file-arrow-up scroll_icon"></i>
            <label className="one white">
              <p>Faculdades</p>
              <input
                type="radio"
                id="one"
                name="formSelector"
                onClick={selectForm}
                defaultValue="faculdades" 
                defaultChecked
              ></input>
            </label>

            <label className="two">
              <p>Pós-Graduação</p>
              <input
                type="radio"
                id="two"
                name="formSelector"
                onClick={selectForm}
                defaultValue="posGraduacao"
              ></input>
            </label>

            <label className="tree">
              <p>Escolas</p>
              <input
                type="radio"
                id="tree"
                name="formSelector"
                onClick={selectForm}
                defaultValue="escolas"
              ></input>
            </label>

            <label className="four">
              <p>Cursos Técnicos</p>
              <input
                type="radio"
                id="four"
                name="formSelector"
                onClick={selectForm}
                defaultValue="cursostecnicos"
              ></input>
            </label>

            <label className="five">
              <p>Idiomas</p>
              <input
                type="radio"
                id="five"
                name="formSelector"
                onClick={selectForm}
                defaultValue="idiomas"
              ></input>
            </label>

            <label className="six">
              <p>Preparatório para Concursos</p>
              <input
                type="radio"
                id="six"
                name="formSelector"
                onClick={selectForm}
                defaultValue="preparatorio"
              ></input>
            </label>

            <label className="seven">
              <p>Cursos Livres</p>
              <input
                type="radio"
                id="seven"
                name="formSelector"
                onClick={selectForm}
                defaultValue="cursosLivres"
              ></input>
            </label>

            <label className="eight">
              <p>EJA - Educação para Jovens e Adultos</p>
              <input
                type="radio"
                id="eight"
                name="formSelector"
                onClick={selectForm}
                defaultValue="eja"
              ></input>
            </label>

            <label className="nine">
              <p>Pré-Vestibular / ENEM</p>
              <input
                type="radio"
                id="nine"
                name="formSelector"
                onClick={selectForm}
                defaultValue="preEnem"
              ></input>
            </label>
          </div>
          <div className="option_form">
            {componentsString === "faculdades" && <FaculdadesForm />}
            {componentsString === "posGraduacao" && <PosGraudacao />}
            {componentsString === "escolas" && <Escolas />}
            {componentsString === "cursostecnicos" && <CursosTecnicos />}
            {componentsString === "idiomas" && <Idiomas />}
            {componentsString === "preparatorio" && <Preparatorio />}
            {componentsString === "cursosLivres" && <CursosLivres />}
            {componentsString === "eja" && <Eja />}
            {componentsString === "preEnem" && <PreEnem />}
          </div>
        </div>
        <div className="promotion_Container">
          <img
            className="campanhaImg"
            src="/img/campanha.png"
            alt="campanha de promoção"
          ></img>
          <img
            className="fogueteImg"
            src="/img/aviao.png"
            alt="foguete da promoção"
          ></img>
        </div>
      </div>
    </main>
  );
};

export default SelectOption;
