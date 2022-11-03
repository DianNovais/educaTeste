import './Forms.css'

const Escolas = () => {
  return (
    <div className='form_Container'>
        <h2>Escolas</h2>
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
              defaultValue="Serie"
              
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
          <p>Série que deseja estudar: </p>
          <input
            type="text"
            list="cursosList"
            placeholder="DIGITE A SÉRIE"
          ></input>
          
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

export default Escolas