import { ProductsDataProvider } from "./contexts/ProductsDataProvider";

function App(props) {
    return (
        <div className="App">
            <ProductsDataProvider>
                ...
            </ProductsDataProvider>
        </div>
    );
}

export default App;
