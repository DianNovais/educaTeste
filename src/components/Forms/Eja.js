import "./Forms.css"

const Eja = () => {
  return (
    <div className='form_Container'>
        <h2>EJA - Educação para Jovens e Adultos</h2>
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
              defaultValue="Série"
              
            ></input>
            <label htmlFor="searchType">Série</label>
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
          <p>Curso que deseja estudar:</p>
          <input
            type="text"
            list="cursosList"
            placeholder="DIGITE O NOME DO CURSO"
          ></input>
          <datalist id="cursosList">
            <option defaultValue="1">1° ano</option>
            <option defaultValue="2">2° ano</option>
            <option defaultValue="3">3° ano</option>
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

export default Eja