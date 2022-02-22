import 'package:flutter/material.dart';

/// This class controls the Flutter native Navigator class.
///
/// **WARNING:** Use only this class if you are unable to get the context for navigation purposes.
class NavigationService {
  static GlobalKey<NavigatorState> navigationKey = GlobalKey<NavigatorState>();

  /// Push the route with the given name onto the navigator, and then remove all the previous routes until the predicate returns true.
  static Future pushNamedAndRemoveUntil(
    routeName, {
    args,
    keepPreviousPages = false,
  }) async =>
      navigationKey.currentState!.pushNamedAndRemoveUntil(
        routeName,
        (Route<dynamic> route) => keepPreviousPages,
        arguments: args,
      );

  /// Push the route with the given name onto the navigator
  static Future pushNamed(String routeName, {required args}) async => navigationKey.currentState!.pushNamed(
        routeName,
        arguments: args,
      );

  /// Push the given route onto the navigator.
  static Future push(Route route) async => navigationKey.currentState!.push(route);

  /// Pop the top-most route off the navigator.
  static Future pop(dynamic args) async => navigationKey.currentState!.pop(args);

  /// Replace the current route of the navigator by pushing the route named [routeName] and then disposing the previous route once the new route has finished animating in.
  static Future pushReplacementNamed(String routeName, Object args) async => navigationKey.currentState!.pushReplacementNamed(routeName, arguments: args);

  /// Push the given route onto the navigator, and then remove all the previous routes until the predicate returns true.
  static Future pushAndRemoveUntil(
    Route route, {
    bool keepPreviousPages = false,
  }) async =>
      navigationKey.currentState!.pushAndRemoveUntil(
        route,
        (Route<dynamic> route) => keepPreviousPages,
      );
}
