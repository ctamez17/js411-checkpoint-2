import { React, Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Divider, CardActions } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import restaurants from "../redux/restaurants.json";
import { Link } from 'react-router-dom';

class listings extends Component {
  render() {
    const props = this.props.biz;
    console.log(props);
    return (
      <TableBody>
        {this.props.biz.map((biz, index) => (
          <TableRow key={biz.id}>
            <TableCell>
              <Link to={`/details/${biz.id}`}>{biz.name}</Link>
            </TableCell>
            <TableCell>
              <p>{biz.description}</p>
            </TableCell>
            <TableCell>
              <p>{biz.hours}</p>
            </TableCell>
            <TableCell>
              <p>{biz.address}</p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  }
}

export default listings;
