import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Loading from "../../component/Loading";
import pokemonApi from "../../api/pokemonApi";
import ListBox from "../../component/ListBox";
// import SearchForm from '../../feature/Home/component/searchForm';
import Header from "../../component/Header/";
import ListFilter from "../../feature/Home/component/ListFilter";
import typeApi from "../../api/typeApi";
import { useParams } from "react-router";
import Footer from "../../component/Footer";
import InfiniteScroll from "react-infinite-scroll-component";

function Home(props) {
    const url = useParams();
    const refListBox = useRef(null);
    const [allPokemon, setAllPokemon] = useState([]);
    const [allList, setAllList] = useState([]);

    const [loading, setLoading] = useState(true);
    const [btnLoading, setBtnLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const amount = 24;

    const getAllPokemon = async () => {
        const PokeList = await pokemonApi.getAll(amount, offset);
        const data = PokeList.results;

        const createPokemonObj = (result) => {
            return result.map(async (item) => await pokemonApi.get(item.name));
        };

        const result = createPokemonObj(data);

        Promise.all(result).then((data) => {
            let newAllPokemon = [...allPokemon, ...data];
            setAllPokemon(newAllPokemon);
            setLoading(false);
        });
    };

    useEffect(() => {
        getAllPokemon();
    }, [offset]);

    const handleOnClickSeenMore = () => {
        const newOffset = offset + amount;
        setOffset(newOffset);
        setBtnLoading(true);
    };

    return (
        <div className="App-container">
            <Header />
            {loading && <Loading />}
            {!loading && (
                <InfiniteScroll
                    dataLength={allPokemon.length}
                    next={handleOnClickSeenMore}
                    hasMore={true}
                    loader={
                        <button className="btn__block" disabled={true}>
                            <i className="fas fa-circle-notch fa-spin"></i>
                        </button>
                    }
                >
                    <div className="all-container">
                        <ListBox data={allPokemon} />
                    </div>
                </InfiniteScroll>
            )}

            {!loading && <Footer />}
        </div>
    );
}

export default Home;
