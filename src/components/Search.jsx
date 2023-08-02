import React, { useEffect, useState } from 'react';

import MasonryLayout from './MasonryLayout';
import { generateURL } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import Spinner from './Spinner';

const Search = ({ searchTerm }) => {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    if (searchTerm !== '') {
      setLoading(true);
      const query = searchQuery(searchTerm.toLowerCase());
      fetch(generateURL(query)).
      then((response) => response.json()).
      then((data) => {
        setPins(data.result);
        setLoading(false);
      });
    } else {
      fetch(feedQuery).then((data) => {
        setPins(data.result);
        setLoading(false);
      });
    }
  }, [searchTerm]);

  return (
    <div>

      {loading && <Spinner message="Поиск картинок" />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {pins?.length === 0 && searchTerm !== '' && !loading && (
        <div className="mt-10 text-center text-xl ">Не найдено!</div>
      )}
    </div>
  );
};

export default Search;