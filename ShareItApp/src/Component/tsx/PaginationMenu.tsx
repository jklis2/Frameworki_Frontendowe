import React, { FC } from "react";
import "../css/Photo/PaginationMenu.css";
import Pagination from "@mui/material/Pagination";

interface Props {
  pages: number;
  page: number;
  setPage(page: number): void;
}

const PaginationMenu: FC<Props> = (props: any) => {
  const pageChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    props.setPage(value);
  };

  return (
    <div className="pagination__menu">
      <div className="pagination__pages">
        <Pagination
          count={props.pages}
          onChange={pageChangeHandler}
          variant="outlined"
          className="paignation__menu"
          sx={{ color: "white" }}
        />
      </div>
    </div>
  );
};

export default PaginationMenu;
