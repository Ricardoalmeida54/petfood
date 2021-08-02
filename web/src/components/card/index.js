import './styles.css';
const Product = () => {
    return (
        <div className="product col-3">
            <img src="https://agrosolo.fbitsstatic.net/img/p/racao-pedigree-vital-pro-para-caes-adultos-a-partir-de-10-meses-de-racas-pequenas-77421/269824.jpg?w=370&h=370&v=202105180927" 
            className="img-fluid align-center" 
            />
            <button className="btn btn-primary rounded-circle">+</button>
            <h4>
               <label className="badge badge-primary">R$ 90,00</label>
            </h4>
            <small>
                <b>Ração Pedigree Vital Pro para Cães Filhotes com 2 a 10 Meses de Raças Pequenas</b>
            </small>
        </div>
    )
}

export default Product;