
import 'package:ABorla/core/models/ad_package.dart';
import 'package:ABorla/core/models/category.dart';
import 'package:ABorla/core/models/product.dart';
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
    Hive.registerAdapter(ProductAdapter());   // 1
    Hive.registerAdapter(CategoryAdapter());  // 2
    Hive.registerAdapter(AdPackageAdapter()); // 3
    
  } catch (e, stackTrace) {
    print(e.toString() + stackTrace.toString());
  }
}
