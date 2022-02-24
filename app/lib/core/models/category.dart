import 'package:hive/hive.dart';
import 'package:uuid/uuid.dart';

part 'category.g.dart';

@HiveType(typeId: 2)
class Category {
  Category() {
    categoryId = Uuid().v4();
  }

  @HiveField(0)
  String? categoryId;

  @HiveField(1)
  String? name;

  Map toJson() {
    return {
      'categoryId': categoryId,
      'name': name,
    };
  }

  factory Category.fromJson(Map<String, dynamic> json) {
    var category = Category();
    category.categoryId = json['adPackageId'];
    category.name = json['name'];
    return category;
  }
}
