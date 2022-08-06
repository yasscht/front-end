import "./App.css";
import Layout from "./components/layouts/Layout";
import Input from "./components/kit/Input";
import CardContainer from "./components/CardContainer";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { players } from "./players";

function App() {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000`).then((response) => setData(response));
    setIsFetching(!isFetching);
  }, []);
  console.log(data);
  if (data.length === 0) {
    setData(players);
  }
  const [currentItems, setCurrentItems] = useState(data);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(players.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(players.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % players.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const [searchName, setSearchName] = useState("");
  const onChange = (e) => {
    setSearchName(e.target.value);
  };
  return (
    <div className="w-full">
      <Layout>
        <Input
          onChange={(event) => onChange(event)}
          name="firstName"
          isSearch
        />
        <CardContainer
          searchName={searchName}
          itemsPerPage={6}
          currentItems={currentItems}
          players={currentItems}
          isFetching={isFetching}
        />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          className="flex items-center space-x-6 "
          breakLinkClassName=""
          activeClassName="p-3 bg-blue-300 text-white"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </Layout>
    </div>
  );
}

export default App;
