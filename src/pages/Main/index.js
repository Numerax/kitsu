import React, { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';
import Window from '../../components/Window/index';

import { 
  Title, 
  BarUnderTitle, 
  InputSearch, 
  Label, 
  Container,
  Table,
  TableRow,
  TableCell,
  TableCellFixed,
  Avatar,
  HeroName,
  PersonCell,
  Description,
  Bullets,
  PaginationBar,
  LeftArrow,
  RightArrow,
  LoaderContainer,
  Loader
} from './styles';

export default function Main() {
    const [heroesInfo, setHeroesInfo] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [initialSlice, setInitialSlice] = useState(1);
    const [endSlice, setEndSlice] = useState(7);
    const [currentPage, setCurrentPage] = useState(1);
    const [firstPage, setFirstPage] = useState(true);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [windowIsOpen, setWindowIsOpen] = useState(false);
    const [detailsWindow, setDetailsWindow] = useState('');
    const [nameHero, setNameHero] = useState('');
        
    const getHeroes = async (offset=0) => {
      setLoading(true);
      const response = await api.get(`/characters?page%5Blimit%5D=10&page%5Boffset%5D=${offset}`);       
      setHeroesInfo(response.data.data);
      setTotalOfPages(response.data.meta.count);
      setLoading(false);
    }

    const setTotalOfPages = (totalItems) => {
      setTotalPages(totalItems / 10);
    }

    useEffect(() => { 
      getHeroes(); 
    },[]); 

    const browsePages = useCallback((numberBullet) => {
      const offSet = (numberBullet - 1) * 10;
      setCurrentPage(numberBullet);
      getHeroes(offSet.toString());
    }, []);

    const pageNumbers = [...Array(parseInt(totalPages)).keys()];

    const handleChange = useCallback((event) => {
      setQuery(event.target.value);
    },[setQuery]);
    
    const searchHero = async () => {
      const response = await api.get(`/characters?filter[name]=${query}`);
      setHeroesInfo(response.data.data);
    }

    const handleKeyPress = useCallback((event) => {
      if(event.charCode === 13 && query !== ''){
        searchHero(query);
      }
      if(event.charCode === 13 && query === ''){
        getHeroes();
      }
    },[searchHero, query]);  

    const rightArrow = useCallback(() => {
      setFirstPage(false);
      setInitialSlice(endSlice);
      setEndSlice(endSlice + 6); 
      browsePages(endSlice);     
    },[setInitialSlice, setEndSlice,browsePages, endSlice, setFirstPage]);

    const leftArrow = useCallback(() => {
      if(initialSlice !== 1){
        setEndSlice(initialSlice);
        setInitialSlice(initialSlice - 6);
        browsePages(initialSlice - 6);
      } else { setFirstPage(true); }
    }, [setEndSlice, setInitialSlice, browsePages, initialSlice]);   

    const openDetails = useCallback((hero) => () => {
      setDetailsWindow(hero.attributes.description);
      setNameHero(hero.attributes.name);
      setWindowIsOpen(true);
    },[]);

    

    return (
      <>
        <Window visible={windowIsOpen} close={() => setWindowIsOpen(false)} content={detailsWindow} namehero={nameHero} />
        <Title error={false}>
          BUSCA KITSU
          <subtitle> TESTE FONT-END</subtitle>
          <cdt>DOUGLAS AMARAL</cdt>
        </Title>
        <BarUnderTitle></BarUnderTitle>
        <Container>
          <Label>Nome do Personagem</Label>
          <InputSearch onChange={handleChange} onKeyPress={handleKeyPress} value={query} />
        </Container>
        
        <Table>
          
          <TableRow fixed>
            <TableCellFixed>Personagem</TableCellFixed>
            <TableCellFixed fct>Descrição</TableCellFixed>
          </TableRow>
          {loading ? (
            <LoaderContainer>
              <Loader /> 
            </LoaderContainer>
          )
           : 
            (heroesInfo.length > 0 && heroesInfo.map(hero => (
              
              <TableRow key={hero?.id} id={hero?.id} onClick={openDetails(hero)}>
                <TableCell mb>
                  <PersonCell>
                    <Avatar src={hero?.attributes?.image?.original}></Avatar>
                    <HeroName>{hero?.attributes?.name}</HeroName>
                  </PersonCell>
                </TableCell>
                
                <TableCell>
                  <Description>{hero?.attributes?.description?.substr(0, 60)}...</Description>
                </TableCell>
              </TableRow>
            )) 
          )}
        </Table>
        
        <PaginationBar>
          <LeftArrow onClick={leftArrow} browse={firstPage} />
          {pageNumbers.length > 0 && pageNumbers.slice(initialSlice, endSlice).map((pageNumber, index) => (
            <Bullets active={currentPage === pageNumber} onClick={() => browsePages(pageNumber)} key={pageNumber}>{pageNumber}</Bullets>
          ))}
          <RightArrow browse onClick={rightArrow} />
        </PaginationBar>        

      </>
    )
}
