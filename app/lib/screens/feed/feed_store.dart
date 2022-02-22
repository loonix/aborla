import 'package:ABorla/core/mobx/store_state.dart';
import 'package:mobx/mobx.dart';

part 'feed_store.g.dart';

class FeedStore extends _FeedStore with _$FeedStore {
  FeedStore() : super();
}

abstract class _FeedStore with Store {

  _FeedStore() {
    _loaded = false;
  }

  /// Used to show the page or display spinner
  @observable
  bool? _loaded;

  /// Controls the home state to enable/disable view
  @computed
  StoreState get feedScreenState {
    return _loaded! ? StoreState.loaded : StoreState.loading;
  }

  /// Main function to initialise the home page, ui will run after these are completed
  Future init() async {
    _loaded = false;
    try {
      // userPref = await UserPreferenceUtils.getCurrentUserPreference();
    } catch (e, stackTrace) {
      print(e.toString() + stackTrace.toString());
    }
    _loaded = true;
  }
}
