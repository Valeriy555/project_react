import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

import {Genres} from "../Genres/Genres";
import css from './Header.module.css';
import {movieActions} from "../../redux";

const Header = () => {

    const {register, handleSubmit, reset} = useForm({defaultValues: {filter: ''}})
    const dispatch = useDispatch()

    const submit = async (data) => {
        await dispatch(movieActions.setFilterParam(data.filter))
        reset()
    }

    return (
        <header className={css.header}>

            <div className={css.genre}>
                <h3> Choose a genre: </h3>
                <Genres/>

            </div>

            <form className={css.formHeader} onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'Enter film name'}
                       className={css.formHeaderInput} {...register('filter')}/>
                <button className={css.inputBtn}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </form>


        </header>
    );
};

export {Header};