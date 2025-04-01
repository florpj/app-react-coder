import "./stylesComponents/ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h1 className="titulo-pag-card">{greeting}</h1>
        </div>
    );
};

export default ItemListContainer