// import React from 'react';

// export default class MyFilteringComponent extends React.Component {
//     state = {
//         initialItems: [],
//         items: []
//     }

//     filterList = (event) => {
//         let items = this.state.initialItems;
//         items = items.filter((item) => {
//             return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
//         });
//         this.setState({ items: items });
//     }

//     componentWillMount = () => {
//         this.setState({
//             initialItems: this.props.content,
//             items: this.props.content
//         })
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <form>
//                     <input type="text" placeholder="Search" onChange={this.filterList} />
//                 </form>
//                 <React.Fragment>
//                     {
//                         this.state.items.map(function (item) {
//                             return <div key={item}>{item}</div>
//                         })
//                     }
//                 </React.Fragment>
//             </React.Fragment>
//         );
//     }
// };