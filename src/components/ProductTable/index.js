import React, { Component } from 'react';
import { TableContainer, TableWrap } from './TableElements';


export default class ProductTable extends Component {

    constructor(props) {
        super(props); {
            this.state = {
                product: [
                    { position: "", title: " ", price: "", url: " " }
                ]
            }
        }
    }
    
    renderTableData() {
        return this.state.product.map((product, index) => {
            const { position, title, price, link } = product
            return (
                <tr key={position}>
                    <td>{position}</td>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{link}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.products[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <TableContainer>
                <TableWrap>
                    <table id='products'>
                        <tr>{this.renderTableHeader}</tr>
                        {this.renderTableData}
                    </table>
                </TableWrap>
            </TableContainer>
        )
    }
}