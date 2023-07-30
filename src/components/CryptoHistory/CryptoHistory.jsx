import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import {HistoryDate} from '../Service/PostingDatePeriod'

export const CryptoHistory = ({ transactions }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {transactions.map(({ id, price, amount, date }, index) => {
          return (
            <Tr key={id}>
              <Td>{index+1}</Td>
              <Td>{price}</Td>
              <Td>{amount}</Td>
              <Td>{HistoryDate(date)}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
};
