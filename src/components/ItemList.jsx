import Item from "./Item"

const ItemList = ({items}) => {

  return (
    <div className="contenedor-pizzas">
    {items.map((item) => <Item key={item.id} pizza={item}/>)} 
    {/* <h2 key={producto.id}>{producto.nombre}</h2> */}
    </div>
  )
}

export default ItemList