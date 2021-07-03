import React, { Component } from 'react';
import { TableContainer, TableWrap } from './TableElements';


export default class ProductTable extends Component {

    constructor(props) {
        super(props); {
            this.state = {
                product: [
                    { id: 1, name: " ", price: "", url: " " }
                ]
            }
        }
    }
    
    renderTableData() {
        return this.state.product.map((product, index) => {
            const { id, name, price, url } = product
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{url}</td>
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
