import { React } from 'react';
import data from './ListData.json';

function List(props) {
  // create a new array by filtering the original array
  const filteredData = data.filter(el => {
    // if no input the return the original
    const { input } = props;
    if (input === '') {
      return el;
    }
    // return the item which contains the user input
    return el.title.toLowerCase().includes(input);
  });
  return (
    <ul>
      {filteredData.map(item => (
        <li key={item.id}>
          {item.title}
          {item.field}
          {item.scr}
        </li>
      ))}
    </ul>
  );
}

export default List;
