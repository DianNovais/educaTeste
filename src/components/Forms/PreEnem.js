import "./Forms.css"

const PreEnem = () => {
  return (
    <div className='form_Container'>
        <h2>Pré-Vestibular / ENEM</h2>
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
        <label className="estado_container">
          <p>Curso que deseja estudar:</p>
          <input
            type="text"
            list="cursosList"
            placeholder="DIGITE O NOME"
          ></input>
          <datalist id="cursosList">
            <option defaultValue="PRÉ-VESTIBULAR">PRÉ-VESTIBULAR</option>
            <option defaultValue="ENNCEJA">ENNCEJA</option>
            <option defaultValue="PRÉ-ENEM">PRÉ-ENEM</option>
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

export default PreEnem