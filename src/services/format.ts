export const formatValueBR = (value?: number | null): string => {
  if (value) {
    return "R$ " + value.toLocaleString("pt-br", { minimumFractionDigits: 2 });
  }
  return "R$ 0,00";
};
