import React, {Fragment} from 'react'
import RecallHero from "./components/hero";
import RecallContent from "./components/action";


export const RecallPage = () => {
    return (
        <Fragment>
            <RecallHero/>
            <RecallContent/>
        </Fragment>
    )
}

export default RecallPage