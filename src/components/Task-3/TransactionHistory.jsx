import s from './TransactionHistory.module.css'
const TransactionHistory = ({items}) => {
    return (
        <table className={s.table}>
            <thead>
                <tr>
                    <th className={s.tableHead}>Type</th>
                    <th className={s.tableHead}>Amount</th>
                    <th className={s.tableHead}>Currency</th>
                </tr>
            </thead>
        
            <tbody>
                {items.map(item => (
                    <tr className={s.tableLine}>
                        <td className={s.tableCell}>{item.type}</td>
                        <td className={s.tableCell}>{item.amount}</td>
                        <td className={s.tableCell}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory;