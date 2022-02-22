import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';

/// Locks the device to support only portrait mode
Future<void> forcePortraitMode() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]); // To turn off landscape mode
}