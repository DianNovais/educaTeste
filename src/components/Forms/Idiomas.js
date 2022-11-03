import './Forms.css'

const Idiomas = () => {
  return (
    <div className='form_Container'>
        <h2>Idiomas</h2>
        <form>
        <label className="estado_container">
          <p>Escolha uma estado:</p>
          <input
            type="text"
            list="schoolList"
            placeholder="INFORME O ESTADO DESEJADO"
          ></input>
          <datalist id="schoolList">
            <option defaultValue="Bahia">BAHIA</option>
            <option defaultValue="SÃO PAULO">SÃP PAULO</option>
            <option defaultValue="CEARÁ">CEARÁ</option>
            <option defaultValue="MINAS GERAIS">MINAS GERAIS</option>
            <option defaultValue="GOIAS">GOIAS</option>
          </datalist>
        </label>
        <div className="radios_container">
          <p>Prefere buscar por:</p>
          <span>
            <input
              type="radio"
              name="searchType"
              className="radio_orange"
              defaultValue="Idioma"
              
            ></input>
            <label htmlFor="searchType">Idioma</label>
          </span>

          <span>
          
            <input
              type="radio"
              name="searchType"
              className="radio_orange"
              defaultValue="Escola"
              defaultChecked
            ></input>
              <label htmlFor="searchType">Escola</label>
          </span>
        </div>
        <label className="estado_container">
          <p>Idioma que deseja estudar:</p>
          <input
            type="text"
            list="cursosList"
            placeholder="DIGITE O IDIOMA"
          ></input>
          <datalist id="cursosList">
            <option defaultValue="INGLÊS">INGLÊS</option>
            <option defaultValue="FRANCÊS">FRANCÊS</option>
            <option defaultValue="ESPANHOL">ESPANHOL</option>
          </datalist>
        </label>
        <label className="estado_container">
          <p>Idade do Aluno:</p>
          <input
            type="text"
            list="idadeList"
            placeholder="DIGITE A IDADE"
          ></input>
          <datalist id="idadeList">
            <option defaultValue="3">3 ANO</option>
            <option defaultValue="10">10 ANOS</option>
            <option defaultValue="18">18 ANOS</option>
          </datalist>
        </label>
        <div className="button_Container">
          <button>
            <span>Buscar</span>
          </button>
        </div>
        </form>
    </div>
  )
}

export default Idiomas