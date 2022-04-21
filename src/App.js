import './style.css';
import Filter from "./components/Filter";
import Products from "./components/Products";
import Search from "./components/Search";

function App(props) {
    const filterProducts = props.state.filterProducts()

    return (
        <div className='wrapper'>
            <Filter filter={props.state.filterChecked} />
            <Search searchInput={props.state.searchInput} />
            <Products products={filterProducts} />
        </div>
    )
}

export default App;
