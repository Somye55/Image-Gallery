import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import Pagination from 'rc-pagination';
import "rc-pagination/assets/index.css";
import { useContext, useEffect, useState } from "react";
import { QueryContext } from "../Context/context";


function Paginate(props) {
const [currentPage, setCurrentPage] = useState(1);
const context = useContext(QueryContext);
const {querySearch} = context;
const {query,data,totalImgs,moreImgs} = props;
const [showPagination, setShowPagination] = useState(false);

  const onPageChange = (page) => {
    setCurrentPage(page);
    
console.log(page,query)
    querySearch(query,page);
  }


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;

      // Calculate the distance between the bottom of the page and the current scroll position
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

      // Display the pagination component when scrolled to the bottom
      setShowPagination(distanceFromBottom <= 0);
    };
  }, []);

    return (
      <Flex justifyContent={'center'} p={5} >
        <Pagination display={data||showPagination?true:"none"} current={currentPage} total={totalImgs} onChange={p=>onPageChange(p)} pageSize={10}/>
      </Flex>

    );
  }
  export default Paginate;
  