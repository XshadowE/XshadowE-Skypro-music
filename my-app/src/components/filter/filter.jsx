import React from "react";
import { useState } from "react";
import { GenreList } from "./GenreList";
import { AuthorList } from "./AuthorList";
import { YearList } from "./YearList";
import * as S from "./Filter.styles";

function Filter() {
  const [filter, setFilter] = useState("");
  const GENRE = "genre";
  const AUTHOR = "author";
  const YEAR = "year";

  const onFilterClick = (newFilter) => {
    setFilter(filter === newFilter ? "" : newFilter);
  };

  const isVisibleAuthor = filter === AUTHOR;
  const isVisibleGenre = filter === GENRE;
  const isVisibleYear = filter === YEAR;
  return (
    <S.FilterTitle>
      Искать по:
      <S.FilterContent>
        <S.FilterButton onClick={() => onFilterClick(AUTHOR)}>
          исполнителю
        </S.FilterButton>
        {isVisibleAuthor && <AuthorList />}
      </S.FilterContent>
      <S.FilterContent>
        <S.FilterButton onClick={() => onFilterClick(YEAR)}>
          году выпуска
        </S.FilterButton>
        {isVisibleYear && <YearList />}
      </S.FilterContent>
      <S.FilterContent>
        <S.FilterButton onClick={() => onFilterClick(GENRE)}>жанру</S.FilterButton>
        {isVisibleGenre && <GenreList />}
      </S.FilterContent>
    </S.FilterTitle>
  );
}
export default Filter;
