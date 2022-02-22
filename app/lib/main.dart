import 'package:ABorla/core/routes.dart';
import 'package:ABorla/core/services/navigation_service.dart';
import 'package:ABorla/core/storage/hive.dart';
import 'package:ABorla/core/utils/app_behaviours_utils.dart';
import 'package:ABorla/core/utils/route_utils.dart';
import 'package:flutter/material.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await forcePortraitMode();
  await initialiseHive();
  runApp(ABorla());
}

class ABorla extends StatefulWidget {
 @override
  _ABorlaState createState() => _ABorlaState();
}
class _ABorlaState extends State<ABorla> with WidgetsBindingObserver {
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    switch (state) {
      case AppLifecycleState.resumed:
        print('app in resumed');
        break;
      case AppLifecycleState.inactive:
        print('app in inactive');
        break;
      case AppLifecycleState.paused:
        print('app in paused');
        break;
      case AppLifecycleState.detached:
        print('app in detached');
        break;
    }
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance!.addObserver(this);
  }

  @override
  void dispose() {
    WidgetsBinding.instance!.removeObserver(this);
    cleanupHive();
    super.dispose();
  }

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'ABORLA',
      // theme: ssTheme,
      initialRoute: Routes.feed,
      navigatorObservers: [routeObserver],
      routes: Routes.allRoutes,
      // onUnknownRoute: (settings) => MaterialPageRoute(builder: (_) => Login()),
      navigatorKey: NavigationService.navigationKey,
    );
  }
}
