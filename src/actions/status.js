export const PREVIEW_SIDEBAR = 'PREVIEW_SIDEBAR';
export const ADD_SIDEBAR = 'ADD_SIDEBAR';
export const DESCRIPTION_SIDEBAR = 'DESCRIPTION_SIDEBAR';


export const descriptionSidebar = (status) => {
  return {
    type: DESCRIPTION_SIDEBAR,
    status
  }
}

export const previewSidebar = (status) => {
  return {
    type: PREVIEW_SIDEBAR,
    status
  }
}