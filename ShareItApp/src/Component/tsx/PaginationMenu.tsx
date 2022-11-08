import React, {FC} from "react"
import "../css/PaignationMenu.css"
import Pagination from '@mui/material/Pagination';

interface Props {
    pages: number
    page: number;
    setPage(page: number) : void
}

const PaginationMenu : FC<Props> = (props: any) => {

    const pageChangeHandler = (event: React.ChangeEvent<unknown>, value: number) => {
        props.setPage(value);
    }

    return (
        <div>
            <Pagination count={props.pages} onChange={pageChangeHandler} variant="outlined" className="paignation__menu" />
        </div>
    )
}

export default PaginationMenu