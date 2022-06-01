import React, {Fragment} from 'react'
import TakeActionHero2 from "./components/hero2";
import TakeActionContent from "./components/action";


export const TakeActionPage = ({person}) => {
    console.log("person--view",person)
    return (
        <Fragment>
            <TakeActionHero2/>
            <TakeActionContent person={person}/>
        </Fragment>
    )
}

export default TakeActionPage 