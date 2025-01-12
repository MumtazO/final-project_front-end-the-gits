import React from 'react'
import ChoresItem from "../components/ChoresItem"
import { useState } from 'react'
import InputBar from "../components/InputBar"
import styles from "../styles/Chores.module.css"


const Chores = () => {
  // initial state for the list of chores
  const [listItems, setListItems] = useState([
    {
      username:"Abdullahi's",
      name: "Hoover",
      id:"1",
      icon:"user_avatar_1.svg",
      completed: false
    },
    {
      username:"Lee's",
      name: "Dishes",
      id:"2",
      icon:"user_avatar_1.svg",
      completed: false}
  ]);

  // temporaty state, tracks the value of the input box
  const [input, setInput] = useState("");
  
  // creates a list of the items which have been completed
  const completedList = listItems.filter ((item) => {
    if (item.completed === true) {
      return true
    } 
    else {
      return false
    }
  })
    
  // creates a list of the items which a yet to be completed
  const choresTodo = listItems.filter ((item) => {
    if (item.completed === false) {
      return true
    } 
    else {
      return false
    }
  })

  // takes in a value from the input component and updates the list state
  const updateShoppingList = (value) => {
    const id = String(Math.floor(Math.random()*100+3))
    const newItem = {name: value, id: id, completed: false, icon:"user_avatar_1.svg"}
    console.log('sdfsdfs',[...listItems, newItem])
    setListItems([newItem, ...listItems])
  }

  // uses the item id to remove it from the list
  const deleteListItem = (id) => {
    const newListItems = listItems.filter((item) => {
      if (item.id === id) {
        return false
      }
      else {
        return true
      }
    });
    setListItems(newListItems)
  }

  // uses item id to toggled between true or false
  const toggleItemAsCompleted = (id) => {
    let newListItems = [];
    const dbItem = {id};
    // find item by id, update the completed key:value and exit loop
    for (let i = 0; i < listItems.length; i++) {
        console.log(id)
        console.log(listItems[i].id)
      if (listItems[i].id === id) {
        // create updated list
        newListItems = [
          ...listItems.slice(0, i),
          { ...listItems[i], completed: !listItems[i].completed },
          ...listItems.slice(i + 1, listItems.length),
        ];
        // create db object to udpate
        dbItem.completed = !listItems[i].completed;
        break;
      }
    }
    // update the local state
    setListItems(newListItems);
  }

  return (
    <div className={styles.ShoppingNamelist}>
      <div className={styles.heading}>
        {/* the input bar is here while we work on the streatch goal */}
        <InputBar 
            title= "Chores"
            handleClick={updateShoppingList}
        />
      </div>
      <div className={styles.choresWrapper}>
          <div className={styles.choresList}>
            <div className={styles.todoItems}>
              {choresTodo.map((item, index) => (
                <ChoresItem name={item.name} key={index} id={item.id} deleteListItem={deleteListItem} toggleItemAsCompleted={toggleItemAsCompleted} completed={item.completed}/>))}
            </div>
            <div className={styles.completedItems}>
              {completedList.map((item, index) => (
                <ChoresItem name={item.name} key={index} id={item.id} deleteListItem={deleteListItem} toggleItemAsCompleted={toggleItemAsCompleted} completed={item.completed}/>))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Chores