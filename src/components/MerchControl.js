import React from "react";
import MerchList from "./MerchList";
import MerchDetail from "./MerchDetail";
import NewMerchForm from "./NewMerchForm"; 
import EditMerchForm from "./EditMerchForm"; 

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainMerchList: [
        // {
        //   name: 'Beet Red',
        //   price: 400.00,
        //   quantity: 130,
        //   description: 'This floor is embarrassingly red.',
        //   numberInCart:0
        // },
        // {
        //   name: 'Thato',
        //   price: 3.00,
        //   quantity: 4,
        //   description: 'green',
        //   numberInCart: 0
        // },
        // {
        //   name: 'Imani',
        //   price: 9.00,
        //   quantity: 1,
        //   description: 'blue',
        //   numberInCart:0
        // }
      ],
      selectedMerch: null,
      editing: false,
      totalItemsInCart: 0  
    };
  }
  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.mainMerchList.filter(merch => merch.id === id)[0];
    this.setState({selectedMerch: selectedMerch});
    this.setState({formVisibleOnPage: false});
  }
  //Create new unique item
  handleCreateClick = () => {
    this.setState({formVisibleOnPage: true})
  }
  //Delete unique item
  handleDeletingMerch = (id) => {
    const newMainMerchList = this.state.mainMerchList.filter(merch => merch.id !== id);
    this.setState({
      mainMerchList: newMainMerchList,
      selectedTMerch: null
    });
  }

  // CRUD: Updating an Individual TMerch
  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }
  handleEditingMerchInList = (merchToEdit) => {
    const editedMainMerchList = this.state.mainMerchList
      .filter(merch => merch.id !== this.state.selectedMerch.id)
      .concat(merchToEdit);
    this.setState({
        mainMerchList: editedMainMerchList,
        editing: false,
        selectedTMerch: null
      });
  }


  // CRUD: Creating a New Merch and adding it to the old, increasing a newMainMerchList
  handleAddingNewMerchToList = (newMerch) => {
    const newMainMerchList = this.state.mainMerchList.concat(newMerch);
    this.setState({mainMerchList: newMainMerchList,
                  formVisibleOnPage: false }); 
  }




  handleClick = () => {
    if (this.state.selectedMerch != null) {
        this.setState({
            formVisibleOnPage: false,
            selectedMerch: null,
            editing: false
        });
    } else {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
    }
}


  //Add item to cart
//   handleAddItem = (id) => {
//     const selectedMerch = this.state.mainMerchList.filter(merch => merch.id == id) [0]
// if quantity >0 { 
  //const newCount = count +1
//   this.setState({ 
  //count : newCount 
//   else quantity ===0 { 
// "no more for you hahhaaha"
//   }

//   })
// }
//     this.setState({
//        selectedMerch: selectedMerch, 
//        numberInCart: this.state.mainMerchList.numberInCart +1,
//        mainMerchList.quantity: this.state.mainMerchList.quantity -1,
//        totalItemsInCart: this.states.totalItemsInCart+1});
//  }

//   handleDeleteItem = (id) => {
//     const selectedMerch = this.state.mainMerchList.filter(merch => merch.id == id) [0]
//     this.setState({
//        selectedMerch: selectedMerch, 
//        numberInCart: this.state.mainMerchList.numberInCart -1,
//         mainMerchList.quantity: this.state.mainMerchList.quantity -1,
//        totalItemsInCart: this.states.totalItemsInCart-1});
//  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

  if (this.state.editing) {
    currentlyVisibleState = <EditMerchForm merch = {this.state.selectedMerch} onEditMerch = {this.handleEditingMerchInList} />
    buttonText = "Return to Merch List";

  } else if (this.state.selectedMerch != null){
      currentlyVisibleState = <MerchDetail 
        merch = {this.state.selectedMerch} 
        //onClickAddItem ={this.handleAddItem}
        //onClickDeleteItem={this.handleDeleteItem}
        onClickingDelete = {this.handleDeletingMerch}
        onClickingEdit = {this.handleEditClick} />
      buttonText= "Return to Merch List";
  


    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList}/>;
      buttonText = "Return to Merch List";

    } else {
      currentlyVisibleState = <MerchList merchList={this.state.mainMerchList} onMerchSelection={this.handleChangingSelectedMerch}/>;
      buttonText = "Add Merch";
    };

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default MerchControl;
