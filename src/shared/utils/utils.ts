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

export const formatIntegerToRusLocale = (number: number) => {
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
  return `${formatIntegerToRusLocale(number)} ${forms.get(pluralForm)}`;
}

export function makeRusPluralization(forms: [string, string, string], number: number): string {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `${number} ${forms[0]}`;
  } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
    return `${number} ${forms[1]}`;
  } else {
    return `${number} ${forms[2]}`;
  }
}

export function overflowString(inputString: string, maxLength: number = 10) {
  if (inputString.length <= maxLength) {
    return inputString;
  }

  return inputString.slice(0, maxLength - 3) + '…';
}
