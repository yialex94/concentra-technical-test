'use strict';

// Converts camel case string to a sentence case
export const formatCamelCaseString = text => {
  let camelCase = text.replace( /([A-Z0-9])/g, " $1" );
  let sentenceCase = camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  return sentenceCase;
};

// Handles page navigation
export const handleOnPageNavigation = function (item) {
  this.setState({
    page: item.key
  });
}
