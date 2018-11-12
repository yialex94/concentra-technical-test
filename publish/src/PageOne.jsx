'use strict';

// Load NPM modules
import React from 'react';

// Load antDesign modules
import { Input, Table } from 'antd';

// Gets an object which has the count of letters
const getLetterCount = text => {
  const result = {};
  let removeAlpha =  text.replace(/\W/g, '');
  for (var i = 0; i < text.length; i++) {
    result[text[i]] = ((result[text[i]]) ? result[text[i]] : 0) +1;
  }
  return result;
};

// Define columns
const getColumns = (text, increment) => {
  // return [
  //   {
  //     title: 'Letter',
  //     dataIndex: 'name',
  //     render: text => <b>{text}</b>
  //   }
  // ];

  // I wasnt able to figure this out
  /*

  I would probably start by creating an empty array 
  const arr = [];

  and then create a variable to account for the length of the string
  let str = text.length

  and then create a loop to push object into  array

  for (let i = 0; i < str.length; i++)  {
    arr.push(getLetterCount(i));
  }

  but im not sure where to go from here.

  */
  

};

// Build entry
const getLetterRow = (letter, count, template) => {
  return {};
};

// Get row template
const getRowTemplate = (text, increment) => {
  return {};
};

// Define data source
const getDataSource = (text, increment) => {
  return [];
};

// Build text box
const buildTextBox = (state, updateState) => (
  <Input.TextArea
    rows={8}
    style={{ marginBottom: '24px' }}
    value={state.text}
    onChange={e => updateState({ text: e.target.value })}
  />
);

// Build table
const buildTable = (dataSource, columns) => (
  <Table dataSource={dataSource} columns={columns} />
);

// Define export
export default (state, updateState) => (
  <div className="page-one">
    <h2>Enter Text:</h2>
    {buildTextBox(state, updateState)}
    <h2>View Letters by Count:</h2>
    {buildTable(
      getDataSource(state.text, state.increment),
      getColumns(state.text, state.increment)
    )}
  </div>
);
