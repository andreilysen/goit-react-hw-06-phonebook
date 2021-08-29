import * as fetchAPI from "../service/contacnts-API";
import * as actions from "./contactsAction";

export const postContactOperation = (contact) => async (dispatch) => {
  try {
    const result = await fetchAPI.postContacts(contact);
    dispatch(actions.addContacts(result));
  } catch (error) {}
};

export const getContactOperation = () => async (dispatch) => {
  try {
    const result = await fetchAPI.getContacts();
    dispatch(actions.setContacts(result));
  } catch (error) {}
};

export const deleteContactOperation = (id) => async (dispatch) => {
  try {
    await fetchAPI.deleteContact(id);
    dispatch(actions.deleteContact(id));
  } catch (error) {}
};
