function List() {
    let items = ['Juan', 'Pedro', 'Edward', 'Maria', 'Luisa'];
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
  
}
export default List;