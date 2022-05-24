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
                src={person.img}
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
                    {person.name}
                </PersonName>
                <Space>
                    <PersonFullName>
                        {person.fullName}
                    </PersonFullName>
                    <LicenseString>
                        ({person.lmft && 'LMFT '}License # {person.license})
                    </LicenseString>
                </Space>
                <ActionContent>
                    {person.content}
                </ActionContent>
            </div>
            <div><TakeActionForm/></div>
        </ActionItemWrap>
    );
};

export default TakeActionItem;