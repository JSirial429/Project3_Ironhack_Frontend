import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { render } from 'react-dom';

import './savehistory.component.css'


const SaveHistory = ()=>{

    const location = useLocation();
    const history = useHistory();

    const goBackToSearch = ()=>{
        history.push('/dashboard')
    }

    const RenderProductHistory = ()=>{

    }

    return(

            <div className="master">
                <button onClick={()=>goBackToSearch()}>
                    Go Back To Search
                </button>
                <ReactBootStrap.Table className="react-table-saved-history">
                    <thead>
                        <tr>
                            <td>
                                Saved Product
                            </td>
                            <td>
                                Price
                            </td>
                            <td>
                                Retailer
                            </td>
                            <td>
                                Link
                            </td>
                            <td>
                                Remove
                            </td>
                        </tr>
                    </thead>
                </ReactBootStrap.Table>
            </div>
        )
        
}

export default SaveHistory;