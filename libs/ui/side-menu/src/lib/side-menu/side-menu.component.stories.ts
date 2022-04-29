import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SideMenuComponent } from './side-menu.component';

export default {
  title: 'SideMenuComponent',
  component: SideMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SideMenuComponent>;

const Template: Story<SideMenuComponent> = (args: SideMenuComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}