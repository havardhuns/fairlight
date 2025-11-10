export const formatToMonthYear = (dateStr: string) => {
  const date = new Date(dateStr.split(".").reverse().join("-"));

  const formatted = new Intl.DateTimeFormat("no-NO", {
    month: "short",
    year: "numeric",
  }).format(date);

  // Gjør første bokstav stor
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};
