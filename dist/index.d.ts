import * as React from 'react';
import { TextFieldProps } from '@material-ui/core';
export declare type MenuItemType = {
    id: string | number | null;
    text: string;
};
export declare type PropTypes = {
    textFieldProps?: TextFieldProps;
    optionsList: MenuItemType[];
    excludedOptions: MenuItemType[];
    onAdd: (data: MenuItemType) => void;
};
declare const InputTextSelect: React.FC<PropTypes>;
export default InputTextSelect;
