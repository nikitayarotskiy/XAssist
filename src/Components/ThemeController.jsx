import React from 'react';

const ThemeController = () => {
  return (
    <label className="swap swap-rotate pt-2">
      <input type="checkbox" className="theme-controller" defaultChecked value="nord" />
      <span className="swap-off h-10 w-10 text-secondary material-icons">
        dark_mode
      </span>
      <span className="swap-on h-10 w-10 text-secondary material-icons">
      light_mode
      </span>
    </label>
  );
};

export default ThemeController;
