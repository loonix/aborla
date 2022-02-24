import 'package:ABorla/core/enums/type_of_request.dart';
import 'package:hive/hive.dart';
import 'package:uuid/uuid.dart';

part 'product.g.dart';

@HiveType(typeId: 1)
class Product {
  Product() {
    productId = Uuid().v4();
  }

  @HiveField(0)
  String? productId;

  @HiveField(1)
  String? title;

  @HiveField(2)
  String? categoryId;

  @HiveField(3)
  String? description;

  @HiveField(4)
  String? location;

  @HiveField(5)
  List<String>? images;

  @HiveField(6)
  TypeOfRequest? typeOfRequest;

  @HiveField(7)
  DateTime? expirationDate;

  @HiveField(8)
  String? adPackage;

  String? get featuredImage {
    if(images!.isNotEmpty) return  this.images![0];
    return null;
  }

  Map toJson() {
    return {
      'productId': productId,
      'title': title,
      'categoryId': categoryId,
      'description': description,
      'images': images,
      'typeOfRequest': typeOfRequest,
      'expirationDate': expirationDate,
      'adPackage': adPackage,
    };
  }

  factory Product.fromJson(Map<String, dynamic> json) {
    var product = Product();
    product.productId = json['productId'];
    product.title = json['title'];
    product.categoryId = json['categoryId'];
    product.description = json['description'];
    product.images = json['images'];
    product.typeOfRequest = json['typeOfRequest'];
    product.expirationDate = json['expirationDate'];
    product.adPackage = json['adPackage'];
    return product;
  }
}
