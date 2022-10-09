function formatDate(info) {
  const date = new Date(info);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dia = day < Number('10') ? `0${day}` : day;

  const dateFormated = `${dia}/${month}/${year}`;
  return dateFormated;
}

function formatPrice(price) {
  const num = Number(price);
  const priceFormated = num
    ? num.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    : 'R$ 0,00';
  return priceFormated;
}

function convertNumbers(number) {
  if (number < Number('10')) {
    return `000${number}`;
  }
  if (number >= Number('10')) {
    return `00${number}`;
  }
  if (number >= Number('100')) {
    return `0${number}`;
  }
  if (number >= Number('1000')) {
    return number;
  }
}

export {
  formatDate,
  formatPrice,
  convertNumbers,
};
