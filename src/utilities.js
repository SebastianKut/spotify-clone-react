export const utilities = {
  truncate: (string, stringLength) =>
    string.length > stringLength
      ? string.substr(0, stringLength - 1) + '...'
      : string,
};
