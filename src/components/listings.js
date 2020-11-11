import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  {
    id: "name",
    label: "Name",
    minWidth: 0, //70
  },
  {
    id: "description",
    label: "Description",
    minWidth: 0, //100
  },
  {
    id: "hours",
    label: "Hours",
    minWidth: 100, //170
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "address",
    label: "Address",
    minWidth: 170, //170
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    //   id: 'density',
    //   label: 'Density',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toFixed(2),
    //
  },
];

function createData(name, description, hours, address) {
  return { name, description, hours, address };
}

//const rows = [createData("India", "IN", 1324171354, 3287263)];
const rows = [createData("Home Slice Pizza", "Home Slice Pizza is an independent neighborhood pizza join serving authentic NY-style-pizza--by the pie or by the slice--to nice people like you. We offer our homemade, hand tossed, bona fide pies for either dine in or carry out.", "11AM - 11PM", "1415 S Congress Ave, Austin, TX 78704")];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.description}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}

// ------------------------- //
// ---- Basic - Back-Up ---- //
// ------------------------- //

// import { React, Component } from "react";
// import {
//   Container,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
// } from "@material-ui/core";

// class listings extends Component {
//     render() {
//       return (
//         <TableBody>
//           <TableRow>
//             <TableCell>

//             </TableCell>
//           </TableRow>
//         </TableBody>
//       );
//     }
//   }

// export default listings;

// ------------------------- //
// ---- Antonio Back-Up ---- //
// ------------------------- //

// class listings extends Component {
//     render() {
//       return (
//         <TableBody>
//           {this.props.biz.map((biz, id) => (
//             <TableRow key={biz.id}>
//               <TableCell>
//                 <p>{biz.name}</p>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       );
//     }
//   }
