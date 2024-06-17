import { Kbd } from '@terrazzo/tiles';

/** @type {import("@storybook/react").Meta} */
export default {
  title: 'Components/Display/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
};

export const Overview = {
  render() {
    return <Kbd>F</Kbd>;
  },
};
