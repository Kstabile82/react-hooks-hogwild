function Filter ({onlyGreased, onUpdateGreasedFilter}) {
    //add a checkbox
    return (
    <div>
        <label>Show Only Greased  
            <input 
                type="checkbox" 
                checked={onlyGreased} 
                onChange={() => onUpdateGreasedFilter()} 
            />
        </label>
    </div>
    )
}
export default Filter;