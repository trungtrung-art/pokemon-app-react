import React from "react";
import TableDetailPokemon from "../TableDetailPokemon";
import TableDetailProgress from "../TableDetailProgress";
import imageQuestion from "../../assets/image/questionmark.png";
import "./style.scss";
import { Link } from "react-router-dom/cjs/react-router-dom";

function BoxPokemonDetail({ data }) {
    const { id, name, sprites, types } = data;

    const image = sprites.other.dream_world.front_default;
    const imagePreventive = sprites.front_default;

    return (
        <div className={`detail detail--${types[0].type.name}`}>
            <Link to={`/pokemon/all`} className="button__back">
                <i className="fas fa-arrow-left"></i>
            </Link>
            <h1 className={`detail__name detail__name--${types[0].type.name}`}>
                <p className="text__info">
                    #
                    {`00${id}`.toString().length > 4
                        ? `00${id}`.toString().slice(2)
                        : `00${id}`.toString().length > 3
                        ? `00${id}`.toString().slice(1)
                        : `00${id}`}
                </p>
                {name.toUpperCase()}
            </h1>
            <div className="detail__info">
                <div className="detail__info--bio">
                    <div className="detail__info--block detail__info--deg">
                        <TableDetailPokemon data={data} />
                    </div>
                </div>
                <div className="detail__info--block detail__info--mar">
                    <img src={image || imagePreventive || imageQuestion} alt="" />
                </div>
                <div className="detail__info--bio">
                    <div className="detail__info--block detail__info--degR">
                        <TableDetailProgress data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxPokemonDetail;
