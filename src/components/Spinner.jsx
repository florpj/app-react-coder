import './stylesComponents/SpinnerStyles.css'

const Spinner = () => {
  return (
    <div>
      <div className="spinner">
        <img src="\iconoPizza.webp" className="pizza-part pizza-part-1" />
        <img src="\iconoPizza.webp" className="pizza-part pizza-part-2" />
        <img src="\iconoPizza.webp" className="pizza-part pizza-part-3" />
        <img src="\iconoPizza.webp" className="pizza-part pizza-part-4" />
      </div>
    </div>
  );
}

export default Spinner