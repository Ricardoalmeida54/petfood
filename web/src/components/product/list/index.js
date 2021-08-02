import './styles.css';
const Product = () => {
    return (
        <div className="product-list col-12">
        <div className="row">
            <div className="col-3">
                <img src="https://www.petlove.com.br/images/products/232557/large/Ra%C3%A7%C3%A3o_Champ_Carne_e_Cereais_para_C%C3%A3es_Adultos_3104796_20kg_1.jpg?1606753971"
                 className="img-fluid" />
            </div>
            <div className="col-6">
                <h6>
                    <label className="badge badge-primary">R$ 30,00</label>
                </h6>
                <small>
                    <b>Ração Champ Carne e Cereais</b>
                </small>
            </div>
            <div className="col-3">
                <button className="btn btn-secondary rounded-circle">-</button>
            </div>
        </div>
        </div>
    );
};

export default Product;