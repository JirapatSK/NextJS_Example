import React from "react";
import Theme from "../../../components/theme";

const Table = (props) => {
  return (
    <React.Fragment>
      <Theme {...props}>
        <table>
          <thead>
            <tr>
              <th scope="col">Account</th>
              <th scope="col">Due Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Account">Visa - 3412</td>
              <td data-label="Due Date">04/01/2016</td>
              <td data-label="Amount">$1,190</td>
              <td data-label="Period">03/01/2016 - 03/31/2016</td>
            </tr>
            <tr>
              <td scope="row" data-label="Account">
                Visa - 6076
              </td>
              <td data-label="Due Date">03/01/2016</td>
              <td data-label="Amount">$2,443</td>
              <td data-label="Period">02/01/2016 - 02/29/2016</td>
            </tr>
            <tr>
              <td scope="row" data-label="Account">
                Corporate AMEX
              </td>
              <td data-label="Due Date">03/01/2016</td>
              <td data-label="Amount">$1,181</td>
              <td data-label="Period">02/01/2016 - 02/29/2016</td>
            </tr>
            <tr>
              <td scope="row" data-label="Acount">
                Visa - 3412
              </td>
              <td data-label="Due Date">02/01/2016</td>
              <td data-label="Amount">$842</td>
              <td data-label="Period">01/01/2016 - 01/31/2016</td>
            </tr>
          </tbody>
        </table>
      </Theme>

      <style jsx>{`
        table {
          border-collapse: collapse;
          margin: 0;
          padding: 0;
          width: 100%;
          table-layout: fixed;
        }

        table tr {
          padding: 0.35em;
        }

        table th,
        table td {
          padding: 0.625em;
          text-align: center;
        }

        table th {
          font-size: 16px;
          letter-spacing: 0.1em;
        }

        tr,
        td,
        th {
          border: 1px solid #e0e0e0;
        }

        @media screen and (max-width: 900px) {
          table thead {
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
          }

          table tr {
            display: block;
            margin-bottom: 0.625em;
          }

          table td {
            display: block;
            text-align: right;
            border: none;
          }

          table td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Table;
