import "./WidgetsLg.scss";

export default function WidgetsLg() {
  const Button = ({ type }) => {
    return <button className={"WidgesLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetsLg">
      <h3 className="WidgestLgTitle">Latest transactions</h3>
      <table className="WidgestTable">
        <tr className="WidgestTr">
          <th className="WidgestTh">Customer</th>
          <th className="WidgestTh">Date</th>
          <th className="WidgestTh">Amount</th>
          <th className="WidgestTh">Status</th>
        </tr>
        <tr className="WidgestTr">
          <td className="widgestLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvW0B3pqHgacyxRc_UUSI2nT5HhlQw9TS1ELnjV0dLEWY-3ehR5BFpDXFVzgqNZWjVqsA&usqp=CAU"
              alt=""
              className="WidgesrLgimg"
            />
            <span className="WidgestLgName">Susan Crol</span>
          </td>
          <td className="widgestLgDate"> 22 nov 1982</td>
          <td className="widgestLgAmount">$155.7</td>
          <td className="widgestLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="WidgestTr">
          <td className="widgestLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvW0B3pqHgacyxRc_UUSI2nT5HhlQw9TS1ELnjV0dLEWY-3ehR5BFpDXFVzgqNZWjVqsA&usqp=CAU"
              alt=""
              className="WidgesrLgimg"
            />
            <span className="WidgestLgName">Susan Crol</span>
          </td>
          <td className="widgestLgDate"> 22 nov 1992</td>
          <td className="widgestLgAmount">$75.7</td>
          <td className="widgestLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="WidgestTr">
          <td className="widgestLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvW0B3pqHgacyxRc_UUSI2nT5HhlQw9TS1ELnjV0dLEWY-3ehR5BFpDXFVzgqNZWjVqsA&usqp=CAU"
              alt=""
              className="WidgesrLgimg"
            />
            <span className="WidgestLgName">Susan Crol</span>
          </td>
          <td className="widgestLgDate"> 22 nov 1982</td>
          <td className="widgestLgAmount">$155.7</td>
          <td className="widgestLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
