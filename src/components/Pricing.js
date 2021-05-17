import React from 'react';
import Navbar from './Navbar'
import '../scss/Pricing.scss'
// import ReactTable from 'react-table'
import {Table } from 'react-bootstrap'
function Pricing() {
    return (
    <div>
            <Navbar />
            <br></br><br></br>
            <h1> WOMEN </h1>
            
            <Table  borderless hover>
        <thead>
            <tr>
            <th></th>
            <th>Simple</th>
            <th>With Lining</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td><b>Blouse</b></td>
            <td>400</td>
            <td>800</td>
            <td>1400 (Padded)</td>
            </tr>
            <tr>
            <td><b>Top</b></td>
            <td>500</td>
            <td>900</td>
            <td></td>
            </tr>
            <tr>
            <td><b>Salwar & Churidar</b></td>
            <td>250</td>
            <td>500</td>
            </tr>
            <tr>
            <td><b>Pant</b></td>
            <td>400</td>
            <td>600</td>
            <td>900 (umbrella)</td>
            </tr>
            <tr>
            <td><b>One Piece/Chaniya Choli/Gown</b></td>
            <td>700</td>
            <td>1400</td>
            </tr>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <td></td>
            <td><b>Simple</b></td>
            <td><b>With Lining</b></td>
            <td><b>Padded</b></td>
            <td><b>With Bakram</b></td>
            <td><b>Cancan</b></td>
            </tr>
            <tr>
            <td><b>A-Line</b></td>
            <td>1000</td>
            <td>1800</td>
            <td>2400</td>
            <td>2800</td>
            <td>3400</td>
            </tr>
            <tr>
            <td><b>Umbrella</b></td>
            <td>1200</td>
            <td>2000</td>
            <td>2600</td>
            <td>3000</td>
            <td>3600</td>
            </tr>
            <tr>
            <td><b>Umbrella</b></td>
            <td>1400</td>
            <td>2200</td>
            <td>2800</td>
            <td>3200</td>
            <td>3800</td>
            </tr>
        </tbody>
        </Table>
        <br></br><br></br>    
        <h1>GENTS</h1>
        <br></br>
            <Table  borderless hover>
        <thead>
        </thead>
        <tbody>
            <tr>
                <td><b>Shirt</b></td>
                <td>500</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>   
            </tr>
            <tr>
                <td><b>Pant</b></td>
                <td>700</td>
            </tr>
            <tr>
                <td><b>Half Pant</b></td>
                <td>600</td>
            </tr>
            <tr>
                <td><b>Kurta</b></td>
                <td>600</td>
            </tr>
            <tr>
                <td><b>Churidar</b></td>
                <td>300</td>
            </tr>
            <tr>
                <td><b>Jacket</b></td>
                <td>600</td>
            </tr>
            <tr>
                <td><b>Patani Suit</b></td>
                <td>1200</td>
            </tr>
            <tr>
                <td><b>Blazer</b></td>
                <td>3500</td>
            </tr>
            <tr>
                <td><b>Sherwani</b></td>
                <td>4500</td>
            </tr>
        </tbody>
        </Table>
        <div className="Children"> Children below the height of 3'5 feet are eligible for 20% off </div>
        <div className="terms">*Terms and condtions applied </div>

    </div>
    )
}

export default Pricing;
