const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
        </header>
        <span className="item-price">{price}</span>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  )
}
export default MenuItem
