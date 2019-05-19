import React from 'react';
import { Tabs, Button } from 'antd';

const TabPane = Tabs.TabPane;

const operations = <Button>Extra Action</Button>;

export class Home extends React.Component {
    render() {
        return (
            <div>
                <Tabs tabBarExtraContent={operations}>
                    <TabPane tab="Image Posts" key="1">
                        Content of tab 1
                    </TabPane>
                    <TabPane tab="Viedo Posts" key="2">
                        Content of tab 2
                    </TabPane>
                    <TabPane tab="Map" key="3">
                        Content of tab 3
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}