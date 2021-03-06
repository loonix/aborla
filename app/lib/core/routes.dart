import 'package:ABorla/screens/feed/feed.dart';
import 'package:ABorla/screens/login/login.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Routes {
  Routes._();

  static const String login = '/login';
  static const String feed = '/feed';

  static final allRoutes = <String, WidgetBuilder>{
    Routes.feed: (_) => Feed(),
    Routes.login: (_) => Login(),
  };
}
