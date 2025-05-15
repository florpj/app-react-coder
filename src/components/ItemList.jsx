import Item from "./Item"

const ItemList = ({items}) => {

  return (
    <div className="contenedor-pizzas">
    {items.map((item) => <Item key={item.id} pizza={item}/>)} 
    </div>
  )
}

export default ItemList