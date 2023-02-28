import React from 'react';

import Tabs from '../components/Tabs/Tabs';
import Tab from '../components/Tabs/Tab/Tab';

export default {
  title: 'Tabs',
  component: Tabs,
};

const Template = (args) => (
<Tabs activeIndex={args.activeIndex}>
  <Tab title={args.title1}>
    <h3>Contetn Tab1</h3>
  </Tab>
  <Tab title={args.title2} disabled={args.disabled}>
    <h3>Contetn Tab2</h3>
  </Tab>
  <Tab title={args.title3} icon={args.icon}>
    <h3>Contetn Tab3</h3>
  </Tab>
</Tabs>
);

export const Base = Template.bind({});

Base.args = {
  title1: 'Vue',
  title2: 'Angular',
  title3: 'React',
};

export const DisabledTab = Template.bind({});

DisabledTab.args = Object.assign({
  disabled: true
}, Base.args);

export const ActiveTab = Template.bind({});

ActiveTab.args = Object.assign({
  activeIndex: 2
}, Base.args);

export const IconTab = Template.bind({});

IconTab.args = Object.assign({
  icon: <img src='../../logo192.png' alt='tab icon' width="12px" height="12px"/>
}, Base.args);