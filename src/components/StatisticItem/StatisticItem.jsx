import { IconContext } from "react-icons";
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

import {ReactComponent as Icon} from "../../images/search-svgrepo-com.svg"
import Sprite from '../../images/sprite.svg'

export const StatisticItem = ({title, total, icon}) => {
  return <StatisticBox>
    <Icon/>
    {/* <svg>
      <use href={`${Sprite}#icon-emblem`}/>
    </svg> */}
    <IconContext.Provider value={{ size: "5em", }}>
    {icon}</IconContext.Provider>
    <StatisticCounter>{total}</StatisticCounter>
    <StatisticText>{title}</StatisticText>
  </StatisticBox>

};
