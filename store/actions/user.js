export const addClip = ({ clip }) => {
  return {
    type: 'ADD_CLIP',
    clip, //この部分がPayload
  };
};

export const deleteClip = ({ clip }) => {
  return {
    type: 'DELETE_CLIP',
    clip,
  };
};
