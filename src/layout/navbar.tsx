import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';
// @ts-ignore
import * as classes from "./layout.module.css"

export const NavBar: React.FunctionComponent = () => {
  return (
    <div className={classes.navbar}>
      <CommandBar
        items={_items}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
    </div>
  );
};

const _items: ICommandBarItemProps[] = [
  {
    key: 'download',
    text: 'Download',
    iconProps: { iconName: 'Download' },
    href: "https://github.com/ACCSTeam/ACContentSynchronizer/releases/latest",
  },
];
