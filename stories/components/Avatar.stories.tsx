import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from '../../components/Avatar/Avatar';

export default {
    title: 'Component/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Timi Peter',
};

export const withImage = Template.bind({});
withImage.args = {
    name: 'John Doe',
    shape: 'square',
    image: {
        src: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
    },
    size: 'lg'
}



