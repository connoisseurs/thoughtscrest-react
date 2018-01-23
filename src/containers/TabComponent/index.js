import React, { PureComponent } from 'react';
import Tabs from 'react-responsive-tabs';

import './styles.css';

export class TabComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false,
      transform: false,
      showInkBar: true,
      items: [],
      selectedTabKey: 0,
    };
  }

   getSimpleTabs(dummyData){
       return dummyData.map(({ name, description }, index) => ({
         key: index,
         title: name,
         getContent: description
       }));
   }
   componentDidMount() {
       fetch("http://127.0.0.1:8080/dummyData.json")
         .then(res => res.json())
         .then(
           (result) => {
             console.log(result)
             this.setState({
               isLoaded: true,
               items: result.map(({ name, description }, index) => ({
                                     key: index,
                                     title: name,
                                     getContent:()=> description
                                   }))
             });
           },
           // Note: it's important to handle errors here
           // instead of a catch() block so that we don't swallow
           // exceptions from actual bugs in components.
           (error) => {
                   console.log(error);

             this.setState({
               isLoaded: true,
               error
             });
           }
         )
                 console.log('mount it!');

     }

  onChangeProp = propsName =>
    evt => {
      this.setState({ [propsName]: evt.target.type === 'checkbox' ? evt.target.checked : +evt.target.value });
    };


  render() {
    const { showMore, transform, showInkBar, selectedTabKey } = this.state;
    return (
      <div className="basic__wrapper">
        <div className="basic__tabs">
          <Tabs {...this.state} />
        </div>
      </div>
    );
  }
}

export default TabComponent;
