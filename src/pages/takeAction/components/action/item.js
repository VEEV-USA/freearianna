import React from 'react';
import {Col, Row, Space} from "antd";
import {ActionContent, LicenseString, PersonFullName, PersonName} from "./style/name";
import ActionItemWrap from "./style/item-wrap";

const TakeActionItem = ({person}) => {
    return (
        <ActionItemWrap>
            <img
                src={person.img}
                alt={person.name}
                width={110}
                height={110}
                style={{
                    borderRadius: 200,
                    objectFit: 'cover'
                }}
            />
            <div>
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
        </ActionItemWrap>
    );
};

export default TakeActionItem;