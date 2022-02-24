import 'package:hive/hive.dart';
import 'package:uuid/uuid.dart';

part 'ad_package.g.dart';

@HiveType(typeId: 3)
class AdPackage {
  AdPackage() {
    adPackageId = Uuid().v4();
  }

  @HiveField(0)
  String? adPackageId;

  @HiveField(1)
  String? name;

  @HiveField(2)
  String? description;

  @HiveField(3)
  Duration? length;

  @HiveField(4)
  bool? isForWebsite;

  @HiveField(5)
  bool? isForApp;

  @HiveField(6)
  double? price;

  Map toJson() {
    return {
      'adPackageId': adPackageId,
      'name': name,
      'description': description,
      'length': length,
      'isForWebsite': isForWebsite,
      'isForApp': isForApp,
      'price': price,
    };
  }

  factory AdPackage.fromJson(Map<String, dynamic> json) {
    var adPackage = AdPackage();
    adPackage.adPackageId = json['adPackageId'];
    adPackage.name = json['name'];
    adPackage.description = json['description'];
    adPackage.length = json['length'];
    adPackage.isForWebsite = json['isForWebsite'];
    adPackage.isForApp = json['isForApp'];
    adPackage.price = json['price'];
    return adPackage;
  }
}
