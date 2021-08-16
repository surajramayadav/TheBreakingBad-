import React, { forwardRef } from "react";
import { View, TextInput } from 'react-native'

const Input = (props, ref) => {
  let {
    placeholder = 'Enter',
    placeholderTextColor = 'white',
    style = {},
    keyboardType = 'default',
    HandleData,
    value, defaultValue,
    maxLength,
    onChangeText, onblur,
    secureTextEntry,
    selection,
    
  } = props;
  return (

    <TextInput

      // editable={false}
      // selectTextOnFocus={false}
      onChangeText={e => onChangeText(e)}
      // onBlur={onblur}
      onFocus={HandleData}
      value={value}
      maxLength={maxLength}
      defaultValue={defaultValue}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      style={{ fontSize: 14, ...style, }}
      secureTextEntry={secureTextEntry}
      selection={selection}
     
    />

  )
}

export default forwardRef(Input)