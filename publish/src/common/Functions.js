'use strict';

// Converts camel case string to a sentence case
export const formatCamelCaseString = text => {
  return text;
};

// Handles page navigation
export const handleOnPageNavigation = function (item) {
  this.setState({
    page: item.key
  });
}
