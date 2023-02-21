import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import SearchResults from "./Pages/SearchResults";
import Movies from "./Pages/Movies";
import TVShows from "./Pages/TVShows";
import People from "./Pages/People";
import Modal from "./Components/UTIL/Modal";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalContext } from "./context/SearchQueryContext";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const [query, setQuery] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [actorId, setActorId] = useState("0");
  const [modalData, setModalData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actorDetail, setActorDetail] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        query,
        setQuery,
        modalData,
        setModalData,
        isModalOpen,
        setIsModalOpen,
        actorId,
        setActorId,
        actorDetail,
        setActorDetail,
        menuIsOpen,
        setMenuIsOpen,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Header />
        {menuIsOpen ? <Sidebar /> : null}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Search" element={<SearchResults />}></Route>
          <Route path="/Movies" element={<Movies />}></Route>
          <Route path="/Shows" element={<TVShows />}></Route>
          <Route path="/People" element={<People />}></Route>
          <Route path="/Modal" element={<Modal />}></Route>
        </Routes>
      </QueryClientProvider>
    </GlobalContext.Provider>
  );
};

export default App;
