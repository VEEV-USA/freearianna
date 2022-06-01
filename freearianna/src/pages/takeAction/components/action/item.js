import React from 'react';
import {Grid, Space} from "antd";
import {ActionContent, LicenseString, PersonFullName, PersonName} from "./style/name";
import ActionItemWrap from "./style/item-wrap";
import TakeActionForm from "./form";

const {useBreakpoint} = Grid;

const TakeActionItem = ({person}) => {
    const breakpoints = useBreakpoint();

    return (
        <ActionItemWrap>
            <img
                src={person.user_avatar}
                alt={person.name}
                width={breakpoints.md ? 110 : 70}
                height={breakpoints.md ? 110 : 70}
                style={{
                    borderRadius: 200,
                    objectFit: 'cover'
                }}
            />
            <div style={{width:'100%'}}>
                <PersonName>
                    {person.full_name}
                </PersonName>
                <Space>
                    <PersonFullName>
                        {person.full_name}
                    </PersonFullName>
                    <LicenseString>
                        ({person.lmft && 'LMFT '}License # {person.license})
                    </LicenseString>
                </Space>
                <ActionContent>
                    {person.page_contents.slice(0, 200)} ... ...
                </ActionContent>
            </div>
            <div> </div>
            <div style={{width:'*'}}><TakeActionForm person={person}/></div>
        </ActionItemWrap>
    );
};

export default TakeActionItem;