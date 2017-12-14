import React, { Component } from 'react';

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }
//
//
//
//   render() {
//     const list = !this.props.filter || this.props.filter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);
//
//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }

const FilteredFruitList = ({ fruit, filter }) => {
  const fruitList = !filter ? fruit : fruit.filter(item => item.fruit_type === filter);

  return (
        <ul className="fruit-list">
          {fruitList.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
        </ul>
)
}


FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
