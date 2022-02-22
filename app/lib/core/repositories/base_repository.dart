import 'package:hive/hive.dart';

Map<String, dynamic> repositories = {};

class BaseRepository<T> {
  Box? box;
  String boxName;
  static String? userEmail;

  BaseRepository(this.boxName);

  ///get the user name of the box
  String get userBoxName {
    return userEmail! + '_' + boxName;
  }

  ///open the hive box if it is not already open
  Future openBox<T>() async {
    if (box == null || !box!.isOpen) box = await Hive.openBox<T>(userBoxName);
  }

  ///inserts the object [data] whose key is [id]
  Future<void> insert<T>(String? id, T data) async {
    if (id == null) return;
    await openBox();
    await box!.put(id, data);
  }

  ///inserts the given set of objects specified by [data]
  Future<void> insertAll<T>(Map<dynamic, T> data) async {
    await openBox();
    await box!.putAll(data);
  }

  ///delete the object with specified [key]
  Future<void> delete(String? key) async {
    await openBox();
    await box!.delete(key);
  }

  ///gets the object of type [T] with the specified [key]
  Future<T?> get<T>(String? key) async {
    if (key == null) return null;
    await openBox();
    var val = box!.get(key);
    return (val is T) ? val : null;
  }

  ///gets all items of the specified type[T]
  Future<List<T>> getAll<T>() async {
    await openBox();
    if (box!.isEmpty) return [];
    var retList = <T>[];
    for (var v in box!.values) {
      if (v is T) retList.add(v);
    }
    return retList;
  }

  ///gets the count of items in repository
  Future<int> get count async {
    await openBox();
    if (box!.isNotEmpty) return box!.length;
    return 0;
  }
}
