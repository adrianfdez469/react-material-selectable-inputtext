# react-material-selectable-textinput

Material-ui textInput component that allow choose between several options.

# Why a package was created

This package arises from the non-existence in the material-ui library of a component that will merge the
functionalities of inputText and Select into one.

# What problem the package solves

With this package you can have an inputText with the select functionality. While you type on it, you can see
and select one of the available options that pop up.

# Preconditions

For this to work you need to have @material-ui/core and @material-ui/icons installed on your project.

`npm install @material-ui/core @material-ui/icons`
or
`yarn add @material-ui/core @material-ui/icons`

# Install

`npm install react-material-selectable-inputtext`
or
`yarn add react-material-selectable-inputtext`

# All valid configurations/props of the package

`optionsList` is a prop of type: `{ id: text|string|null, text: string }[]` Should contain the full list of posibles items to show for select.
`excludedOptions` is a prop of type: `{ id: text|string|null, text: string }[]` Should contain the items that you dont want to show anymore, could be the list of previous selected items.
`onAdd` is a prop of a void function type that recive a the selected or writend object of type `{ id: text|string|null, text: string }[]`.
IF THE ADDED OBJECT IS NOT FROM THE LIST, THE ID PROPERTY IS GOING TO BE NULL
`textFieldProps` is an optional object that recieves any property of the TextField component of `@material-ui/core/TextField`.

# Example snippets

```
<InputSelect
  optionsList={allCountries}
  excludedOptions={list}
  onAdd={onAddHandler}
  textFieldProps={{
    variant="outlined"
  }}
/>
...
```

# Demos of the package in action

## DEMO APP

[Select or write new countries](https://adrianfdez469.github.io/demo-material-selectable-input/)

## DEMO CODE

[Code used for the demo](https://github.com/adrianfdez469/demo-material-selectable-input)
