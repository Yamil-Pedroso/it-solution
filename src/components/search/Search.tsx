import { useState } from "react";
import { useRouter } from "next/router";
import { IoMdClose } from "react-icons/io";

interface SearchProps {
  isVisible?: boolean; // Corrección tipográfica aquí
  style?: any;
}

const Search = ({ isVisible, style }: SearchProps) => {
  const [closeSearchLayer, setCloseSearchLayer] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // Estado para almacenar el valor de búsqueda
  const router = useRouter();

  const closeSearch = () => {
    setCloseSearchLayer(true);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Almacena el valor actualizado en el estado
  };

  // Actualizado para navegar a search-found en el envío
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    if (searchValue) { // Verifica si searchValue no está vacío
        router.push(`/search-found?search=${encodeURIComponent(searchValue)}`);
    }

    const keepInLocalStorage = localStorage.setItem("searchValue", searchValue);
    console.log(keepInLocalStorage);
    
  };

  return (
    <div className={style}>
      <div
        className={`absolution-search ${
          closeSearchLayer ? "absolution-close" : ""
        }`}
      >
        <div className="absolution-search-close">
          <IoMdClose onClick={closeSearch} className="absolution-icon" />
        </div>
        <div className="container">
          <form onSubmit={handleOnSubmit} className="absolution-search-form">
            <input
              type="text"
              placeholder="Search..."
              className="absolution-search-input"
              value={searchValue} // Asegura que el input muestre el valor actual del estado
              onChange={handleOnChange}
            />
            <button type="submit" className="absolution-search-button">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
