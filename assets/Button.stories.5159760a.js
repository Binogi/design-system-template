import{j as e}from"./jsx-runtime.3e4f1114.js";import"./iframe.8b0ef905.js";const t=({primary:o=!1,size:a="medium",backgroundColor:l,label:s,...i})=>{const c=o?"storybook-button__primary":"storybook-button__secondary";return e("button",{type:"button",className:["storybook-button",`storybook-button__${a}`,c].join(" "),style:{backgroundColor:l},...i,children:s})},r=t;try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:t.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch{}const B={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},secondary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},large:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},small:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Components/Button",component:r,argTypes:{backgroundColor:{control:"color"}}},n=o=>e(r,{...o}),u=n.bind({});u.args={primary:!0,label:"Button"};const d=n.bind({});d.args={label:"Button"};const p=n.bind({});p.args={size:"large",label:"Button"};const m=n.bind({});m.args={size:"small",label:"Button"};const b=["Primary","Secondary","Large","Small"];export{p as Large,u as Primary,d as Secondary,m as Small,b as __namedExportsOrder,B as default};
//# sourceMappingURL=Button.stories.5159760a.js.map
