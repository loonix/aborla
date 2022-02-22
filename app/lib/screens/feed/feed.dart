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
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      // endDrawer: AppDrawer(),
      body: Column(
        children: [
          Text('this is a test'),
        ],
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
