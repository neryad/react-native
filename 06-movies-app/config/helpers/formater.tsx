export class Formatter {
  public static formatCurrency = (
    amount: number,
    locale = "en-US",
    currency = "USD"
  ): string => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(amount);
  };
}
