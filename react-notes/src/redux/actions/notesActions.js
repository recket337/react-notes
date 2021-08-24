export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const UPDATE_INPUT_FORM_TITLE = 'UPDATE_INPUT_FORM_TITLE';
export const UPDATE_INPUT_FORM_CONTENT = 'UPDATE_INPUT_FORM_CONTENT';
export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
export const UPDATE_EDIT_MODE_TITLE = 'UPDATE_EDIT_NODE_TITLE';
export const UPDATE_EDIT_MODE_CONTENT = 'UPDATE_EDIT_NODE_CONTENT';
export const CONFIRM_EDIT = 'CONFIRM_EDIT';
export const CANCEL_EDIT = 'CANCEL_EDIT';


export function confirmEditAC(id, title, content) {
  return { type: CONFIRM_EDIT, id, title, content };
}

export function editNoteAC(id) {
  return { type: EDIT_NOTE, id };
}

export function cancelEditAC(id) {
  return { type: CANCEL_EDIT, id };
}

export function addNoteAC(title, content) {
  return { type: ADD_NOTE, title, content };
}

export function removeNoteAC(id) {
  return { type: REMOVE_NOTE, id: id };
}

export function updateInputFormTitleAC(title) {
  return { type: UPDATE_INPUT_FORM_TITLE, title };
}

export function updateInputFormContentAC(content) {
  return { type: UPDATE_INPUT_FORM_CONTENT, content };
}

export function toggleEditMode() {
  return { type: TOGGLE_EDIT_MODE };
}
