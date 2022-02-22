/// Extension that converts double to percision
///
/// Examples:
/// ```dart
///  double d = 2.3456789;
///  double d1 = d.toPrecision(1); // 2.3
///  double d2 = d.toPrecision(2); // 2.35
///  double d3 = d.toPrecision(3); // 2.346
/// ```
extension Ex on double {
  double toPrecision(int n) => double.parse(toStringAsFixed(n));
}
