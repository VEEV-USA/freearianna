import React, {Fragment} from 'react'
import TakeActionHero from "./components/hero";
import TakeActionContent from "./components/action";


export const TakeActionPage = () => {
    return (
        <Fragment>
            <TakeActionHero/>
            <TakeActionContent/>
        </Fragment>
    )
}

export default TakeActionPage