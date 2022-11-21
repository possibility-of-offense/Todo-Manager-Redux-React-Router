export const formatCategory = (cat) => {
  switch (cat) {
    case "todos":
      const firstHalve = cat.slice(0, 2);
      const secondHalve = cat.slice(2);

      return `${firstHalve[0].toUpperCase()}${firstHalve.slice(
        1
      )} ${secondHalve[0].toUpperCase()}${secondHalve.slice(1, -1)}`;
    default:
      return cat[0].toUpperCase() + cat.slice(1);
  }
};

export const formatLeftOverCategories = (cat) => {
  switch (cat) {
    case "todos":
      return ["Done", "Doing"];
    case "doing":
      return ["To Do", "Done"];
    case "done":
      return ["To Do", "Doing"];
    default:
      return cat;
  }
};
