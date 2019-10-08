import React from 'react';

import classnames from 'classnames';

import './style.scss';

export interface ITab {
  key: string;
  title: string;
  active?: boolean;
}

export type ITabs = Array<ITab>;

export interface IProps {
  data: ITabs;
  onSelect?: (key: string) => void;
}

const Tabs: React.FunctionComponent<IProps> = props => {
  return (
    <div className="tabs">
      {props.data.map(d => (
        <div
          key={d.key}
          className={classnames('tab', {
            ['tab-active']: d.active
          })}
          onClick={() => {
            props.onSelect && props.onSelect(d.key);
          }}
        >
          {d.title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
