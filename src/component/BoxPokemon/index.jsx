import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import imageQuestion from "../../assets/image/questionmark.png";
import imageBall from "../../assets/image/pokeball.png";

function BoxPokemon({ data }) {
    const { sprites, name, id, types } = data;
    const image = sprites.other.dream_world.front_default;
    const imagePreventive = sprites.front_default;
    const namePokemon = name.charAt(0).toUpperCase() + name.slice(1);
    const type = types[0].type.name;

    return (
        <Link to={`/detail-pokemon/${name}`} key={id}>
            <div className={`item__box item__box--${type}`}>
                <div className="img__block">
                    <img className=" img__block--ball" src={imageBall} />
                    <img src={image || imagePreventive || imageQuestion} alt="" className="img__block--pokemon" />
                </div>

                <div className="info__block">
                    {/* <small>Type: <span>{type}</span></small> */}
                    <div className="tag__block">
                        <b className="info__number">
                            #
                            {`00${id}`.toString().length > 4
                                ? `00${id}`.toString().slice(2)
                                : `00${id}`.toString().length > 3
                                ? `00${id}`.toString().slice(1)
                                : `00${id}`}
                        </b>
                        {types.map((type, ind) => (
                            <>
                                <span className={`tag__type tag__type--${type.type.name}`}>{type.type.name}</span>
                                {types.length > 1 && types.length - ind !== 1 && <span> | </span>}
                            </>
                        ))}
                    </div>
                    <strong className="info__name">{namePokemon}</strong>
                </div>
            </div>
        </Link>
    );
}
export default BoxPokemon;
