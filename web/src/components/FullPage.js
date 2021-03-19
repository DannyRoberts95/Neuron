import React, { useState } from "react";

import ReactPageScroller from "react-page-scroller";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

const FullPage = () => {
  //   const [currentPage, setCurrentPage] = useState(0);

  //   //   handlePageChange = number => {
  //   //     this.setState({ currentPage: number });
  //   //   };

  //   //   handleBeforePageChange = number => {
  //   //     console.log(number);
  //   //   };

  return (
    <ReactPageScroller
      pageOnChange={() => setCurrentPage(1)}
      onBeforePageScroll={this.handleBeforePageChange}
      customPageNumber={this.state.currentPage}
    >
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </ReactPageScroller>
  );
};

export default FullPage;
