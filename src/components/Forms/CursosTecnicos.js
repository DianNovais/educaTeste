import './Forms.css'

const CursosTecnicos = () => {
  return (
    <div className='form_Container'>
        <h2>Cursos Técnicos</h2>
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
              defaultValue="Curso"
              
            ></input>
            <label htmlFor="searchType">Curso</label>
          </span>

          <span>
          
            <input
              type="radio"
              name="searchType"
              className="radio_orange"
              defaultValue="Instituicao"
              defaultChecked
            ></input>
              <label htmlFor="searchType">Instituição</label>
          </span>
        </div>
        <label className="estado_container">
          <p>Qual curso deseja ?</p>
          <input
            type="text"
            list="cursosList"
            placeholder="DIGITE O NOME DO CURSO"
          ></input>
          <datalist id="cursosList">
            <option defaultValue="TECNICO EM ADMINISTRACAO">TÉCNICO EM ADMINISTRAÇÃO</option>
            <option defaultValue="TECNICO EM COMPUTAÇAO GRAFICA">TÉCNICO EM COMPUTAÇÃO GRÁFICA</option>
            <option defaultValue="TECNICO EM VENDAS">TÉCNICO EM VENDAS</option>
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

export default CursosTecnicos