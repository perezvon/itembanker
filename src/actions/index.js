import { BEGIN_IMPORT, END_IMPORT, SET_ACTIVE_PROJECT, INCREMENT_ID } from "../constants/actionTypes";

export const setActiveProject = project => ({ type: SET_ACTIVE_PROJECT, payload: project });
export const incrementId = id => ({ type: INCREMENT_ID, payload: id });
export const beginImport = data => ({ type: BEGIN_IMPORT, payload: data });
