export const addUrlParams = (url: string, queryParams: Record<string, string>) => {
  // Convert the queryParams object into a query string
  const queryString = new URLSearchParams(queryParams).toString();

  // Construct the URL with the query string
  return `${url}?${queryString}`;
}

export const convertDateToRusLocale = (
  inputDate: string,
) => {
  const date = new Date(inputDate);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return date.toLocaleDateString('ru-RU', options);
};

export const formatIntegerToRussianLocale = (number: number) => {
  const roundedNumber = Math.round(number);
  const formatter = new Intl.NumberFormat('ru-RU');
  return formatter.format(roundedNumber);
};

export function formatLunarDistancePluralRus (number: number) {
  const pluralRules = new Intl.PluralRules('ru-RU');
  const forms = new Map([
    ['one', 'лунная орбита'],
    ['few', 'лунные орбиты'],
    ['many', 'лунных орбит'],
    ['other', 'лунных орбит'],
  ]);

  const pluralForm = pluralRules.select(number);
  return `${formatIntegerToRussianLocale(number)} ${forms.get(pluralForm)}`;
}
