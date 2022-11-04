import css from './Header.module.css';

import {Genres} from "../Genres/Genres";



const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.genre}>
                <h3> All Genres: </h3>
                <Genres/>

            </div>

        </div>
    );
};

export {Header};