export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const UPDATE_INPUT_FORM_TITLE = 'UPDATE_INPUT_FORM_TITLE';
export const UPDATE_INPUT_FORM_CONTENT = 'UPDATE_INPUT_FORM_CONTENT';


export function editNote(id) {
  return { type: EDIT_NOTE, id: id };
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
