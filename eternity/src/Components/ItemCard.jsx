import React from 'react';
const ItemCard = (props) => {
    return (
            <div className='item'>

                <div>
                <p>{"Item Type"}</p>
                </div>

                <div>
                <img src={props.img} alt={'Service'}/>
                </div>

                <div>
                <span>{'Cost'}</span>
                <h3>{props.name}</h3>
                </div>

                </div>
              )
}

export default ItemCard;