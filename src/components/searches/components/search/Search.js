import React, { useState } from 'react';
import { useStore } from '../../../../hooks';
import { actions } from '../../../../store';
import './search.scss';


function Search() {
    const [state, dispatch] = useStore();

    const [value, setValue] = useState('');

    const handleTextChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }

    return (
        <div className="search">
            <form>
                <input
                    type="text"
                    value={value}
                    className="search__input input placeholder-theme-13"
                    placeholder="Search..."
                    onChange={handleTextChange}

                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === 'Escape') {
                            dispatch(actions.findByCityName(value))
                            setValue('');
                            event.preventDefault()
                            event.stopPropagation()
                        }
                    }}

                />
            </form>
        </div>
    );
}


export default Search;
