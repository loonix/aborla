import 'package:ABorla/core/constants/colors.dart';
import 'package:ABorla/core/mobx/store_state.dart';
import 'package:ABorla/screens/feed/feed_store.dart';
import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';

class Feed extends StatefulWidget {
  const Feed({Key? key}) : super(key: key);

  final String title = 'Feed';

  @override
  _FeedState createState() => _FeedState();
}

class _FeedState extends State<Feed> {
  final FeedStore _feedStore = FeedStore();

  @override
  void initState() {
    super.initState();
  }

  void initialise() async {
    await _feedStore.init();
  }

  Widget buildScreen() {
    List images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/07/11/15/43/pretty-woman-1509956_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_960_720.jpg",
    "https://cdn.pixabay.com/photo/2013/11/28/10/03/autumn-219972_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/12/17/19/08/away-3024773_960_720.jpg",
  ];
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      // endDrawer: AppDrawer(),
      body: ListView.builder(
        itemBuilder: (BuildContext ctx, int index) {
          return Padding(
            padding: EdgeInsets.all(20),
            child: Card(
              elevation: 20,
              color: ThemeColors.white,
              child: Column(
                children: <Widget>[
                  Image.network(images[index]),
                  Text('Category', style: TextStyle(fontSize: 14, color: ThemeColors.baseColor)),
                  Text('Title', style: TextStyle(fontSize: 20, color: ThemeColors.baseColor, fontWeight: FontWeight.bold)),
                  Text('Location'),
                ],
              ),
            ),
          );
        },
        itemCount: images.length,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    initialise();

    return Observer(builder: (_) {
      switch (_feedStore.feedScreenState) {
        case StoreState.loaded:
          return buildScreen();
        case StoreState.initial:
        case StoreState.loading:
        default:
          return const Center(child: CircularProgressIndicator());
      }
    });
  }
}
