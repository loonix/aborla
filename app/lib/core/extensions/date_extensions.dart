extension DateExtensions on DateTime {
  ///checks if 2 dates are same comparing only the date portion
  bool isDateSame(DateTime date2) {
    return (year == date2.year && month == date2.month && day == date2.day);
  }
}
