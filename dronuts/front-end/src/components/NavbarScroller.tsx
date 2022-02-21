import React from 'react';
import { Tabs } from '@geist-ui/react';
import { useHistory, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Tabs value={location.pathname} onChange={(route) => history.push(route)}>
      <Tabs.Item label="Overview" value="/" />
      <Tabs.Item label="Projects" value="/DonutAvailability.tsx" />
      <Tabs.Item label="Integrations" value="/DonutStore.tsx" />
      <Tabs.Item label="Activity" value="/activity" />
      <Tabs.Item label="Domains" value="/domains" />
      <Tabs.Item label="Usage" value="/usage" />
      <Tabs.Item label="Settings" value="/settings" />
    </Tabs>
  );
};

export default Menu;