// libs
import * as React from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  TextFieldProps
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

// constants
const ITEM_HEIGHT = 48;

// helpers 
const escapeRegExp = (string:string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Types
export type MenuItemType = { id: string|number|null, text: string }; 
export type PropTypes = {
  textFieldProps?: TextFieldProps,
  optionsList: MenuItemType[],
  excludedOptions: MenuItemType[],
  onAdd: (data: MenuItemType) => void
}


const InputTextSelect:React.FC<PropTypes> = (props) => {
  // constants
  const { onAdd, optionsList, excludedOptions, textFieldProps } = props;
  // hooks
  const [inputData, setInputData] = React.useState<MenuItemType|null>(null);
  const [open, setOpen] = React.useState(false);
  const [menuFocused, setMenuFocused] = React.useState(false);
  const textFieldRef = React.useRef<HTMLInputElement>(null);
  const anchorRef = React.useRef(null);

  // handlers
  const changeInputHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setInputData(null);
    } else {
      if (!open) {
        setOpen(true);
      }
      setInputData({ id: null, text: event.target.value });
    }
  };
  const selectMenuItemHandler = (lang: MenuItemType) => {
    setInputData(lang);
    textFieldRef.current?.focus();
    setOpen(false);
    setMenuFocused(false);
  };

  const addHandler = () => {
    if (inputData) {
      // Search for a item that already exist on the full posibles items array
      const index = optionsList.findIndex(
        (optList) => optList.text.toLowerCase().trim() === inputData.text.toLowerCase().trim()
      );
      if (index > -1) {
        onAdd(optionsList[index]);
      } else {
        onAdd(inputData);
      }
    }
    setInputData(null);
    setOpen(false);
  };
  const onPressKeyHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      addHandler();
    } else if (event.key === 'ArrowDown') {
      setMenuFocused(true);
    }
  };
  const onMenuPressKeyHandler = (event:React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'ArrowUp') {
      event.stopPropagation();
      setMenuFocused(false);
      textFieldRef.current?.focus();
    }
  };

  // helpers
  const menuItems = optionsList
    .filter(
      (optList) =>
        excludedOptions.findIndex(
          (selectedPL) => optList.text.toLowerCase().trim() === selectedPL.text.toLowerCase().trim()
        ) === -1
    )
    .filter((optList) => {
      if (!inputData) return false;
      const find = inputData.text.toLowerCase().trim();
      return !optList.text.toLowerCase().trim().search(escapeRegExp(find));
    })
    .map((optList, index) => {
      if (index === 0) {
        return (
          <MenuItem
            autoFocus={menuFocused}
            key={optList.id}
            onKeyDown={(event) => onMenuPressKeyHandler(event)}
            onClick={() => selectMenuItemHandler(optList)}
          >
            {optList.text}
          </MenuItem>
        );
      }
      return (
        <MenuItem key={optList.id} onClick={() => selectMenuItemHandler(optList)}>
          {optList.text}
        </MenuItem>
      );
    });

  return (
    <div>
      <TextField
        value={inputData && inputData.text ? inputData.text : ''}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeInputHandler(event)}
        ref={anchorRef}
        onFocus={() => {
          setTimeout(() => {
            (textFieldRef.current as HTMLInputElement).selectionStart = 0;
            (textFieldRef.current as HTMLInputElement).selectionEnd = 9999999;
          }, 0);
        }}
        inputRef={textFieldRef}
        onKeyUp={(event) => {
          onPressKeyHandler(event);
        }}
        InputProps={
           {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={addHandler}
                  onMouseDown={(event) => {
                    event.preventDefault();
                  }}
                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          }
        }
        {...textFieldProps}
      />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 999 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper
              style={{
                width: menuItems.length > 0 ? (anchorRef.current as unknown as HTMLInputElement).offsetWidth : 0,
                maxHeight: ITEM_HEIGHT * 4.5,
                overflow: 'auto',
              }}
            >
              <ClickAwayListener onClickAway={() => {}}>
                <MenuList id="menu-list-grow">{menuItems}</MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default InputTextSelect;
