
import 'package:ABorla/core/constants/colors.dart';
import 'package:flutter/material.dart';

class CardWidget extends StatelessWidget {
  const CardWidget({
    Key? key,
    required this.image,
    required this.category,
    required this.dateExpire,
    required this.title,
    required this.location,

  }) : super(key: key);

  final String image;
  final String category;
  final String dateExpire;
  final String title;
  final String location;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(10),
      child: Card(
        elevation: 2,
        color: ThemeColors.white,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Image.network(image),
            Padding(
              padding: const EdgeInsets.only(left: 8, right: 8, bottom: 2, top: 2),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(category, style: TextStyle(fontSize: 14, color: ThemeColors.baseColor)),
                  Text(dateExpire, style: TextStyle(fontSize: 14, color: ThemeColors.baseColor)),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 8, right: 8, bottom: 2, top: 2),
              child: Text(title, style: TextStyle(fontSize: 20, color: ThemeColors.baseColor, fontWeight: FontWeight.bold)),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 8, right: 8, bottom: 2, top: 2),
              child: Text(location, style: TextStyle(fontSize: 15, color: ThemeColors.baseColor)),
            ),
          ],
        ),
      ),
    );
  }
}
