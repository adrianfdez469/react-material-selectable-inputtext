# react-material-selectable-textinput

Material-ui textInput component that allow choose between several options and add more by writing and adding.

You can see a demo [here](https://adrianfdez469.github.io/demo-material-selectable-input/)
and the code of the demo [here](https://github.com/adrianfdez469/demo-material-selectable-input)

# Code Example

```es6
import "./App.css";
import InputSelect from "react-material-selectable-inputtext";

const App = () => {
	const _list = [
		{ id: 1, text: "A" },
		{ id: 2, text: "AB" },
		{ id: 3, text: "ABC" },
		{ id: 4, text: "ABCD" },
	];
	const _exclude = [];
	return (
		<div style={{ margin: "20px", fontSize: "20px" }}>
			<InputSelect
				optionsList={_list}
				excludedOptions={_exclude}
				onAdd={(selected) => {
					console.log(selected);
				}}
				textFieldProps={{
					variant: "outlined",
					label: "Field",
				}}
			/>
		</div>
	);
};

export default App;
```

# Motivation

This package arises from the non-existence in the material-ui library of a component that will merge the functionalities of TextField and Select into one single component.
With this package you can have a TextField with the Select functionality. While you type on it, you can see and select one of the available options that pop up.
It uses the `material-ui` [TextField](https://material-ui.com/es/components/text-fields/) component, so it behaves as one.

# Instalation

### Pre-requisitos

Before yo use this pacakge be awere that it needs `@material-ui/core@^4.11.3` and `@material-ui/icons@^4.11.2` to work properly.

`npm install @material-ui/core @material-ui/icons`
or
`yarn add @material-ui/core @material-ui/icons`

### Install

`npm install react-material-selectable-inputtext`
or
`yarn add react-material-selectable-inputtext`

# API Reference

> #### Types of props are important, be aware that the types that are passed to `optionsList` and `excludedOptions` must be array of objects with the shape of:

```es6
[
	{
		id: "id1",
		text: "Text to show",
		// any other properties you want
	},
];
```

| Prop              | Type \*                                      | Required | Description                                                                                                                             |
| ----------------- | -------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `optionsList`     | `{ id: string, text: string }[]`             | true     | Should contain the full list of posibles items to show for select                                                                       |
| `excludedOptions` | `{ id: text, text: string }[]`               | false    | Should contain the items that you dont want to show anymore, could be the list of previous selected items.                              |
| `onAdd`           | `(item: {id: string, text: string}) => void` | false    | Callback function to run when an item is added.                                                                                         |
| `textFieldProps`  | `TextFieldProps` from @material-ui/core lib  | false    | Object that recieves any property of the TextField component of [@material-ui/core/TextField](https://material-ui.com/api/text-field/). |

# Creator

- **Adrián Fernández Martínez** - [adrianfdez469](https://github.com/adrianfdez469)

# License

This project is under MIT License - look the file [LICENSE.md](LICENSE.md) for more details.

## Contributing 🖇️

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for more details of our conduct code, and the proccess to send pull requests.

## Expressions of Gratitude 🎁

- Tell others about this project 📢
- Invite someone on the team to have a beer 🍺 or coffee ☕ or a coffe.
- Give thanks publicly 🤓.

---

⌨️ with ❤️ by [adrianfdez469](https://github.com/adrianfdez469) 😊
