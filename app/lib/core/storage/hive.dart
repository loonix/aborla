
import 'package:hive/hive.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as path;

Future<String> getHiveDir() async {
  final dir = await getApplicationDocumentsDirectory();
  return path.join(dir.path, 'hivedb');
}

Future initialiseHive() async {
  Hive.init(await getHiveDir());
  registerHiveAdapters();
}

Future cleanupHive() async {
  await Hive.close();
}

void registerHiveAdapters() async {
  try {
    // Hive.registerAdapter(UserAdapter());
  } catch (e, stackTrace) {
    print(e.toString() + stackTrace.toString());
  }
}
