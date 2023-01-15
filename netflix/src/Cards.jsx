import React from "react";

function Card(props){
    console.log(props);
    return(

        <> 
        
        <div className="cards">
            <img src={props.imgsrc} alt="error" className='card__img' />
            <div className="card__info">
                <span className='card__category'>{props.title}</span>
                <h3 className='card__title'>{props.sname}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
            </div>
    </div>
        </>
    )
    }    
    export default Card;