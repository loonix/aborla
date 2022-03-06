import 'package:ABorla/core/mobx/store_state.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:mobx/mobx.dart';
import 'package:firebase_auth/firebase_auth.dart';

part 'login_store.g.dart';

class LoginStore extends _LoginStore with _$LoginStore {
  LoginStore() : super();
}

abstract class _LoginStore with Store {
  _LoginStore() {
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

  @action
  Future<UserCredential> signInWithGoogle() async {
    // Trigger the authentication flow
    final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();

    // Obtain the auth details from the request
    final GoogleSignInAuthentication? googleAuth = await googleUser?.authentication;

    // Create a new credential
    final credential = GoogleAuthProvider.credential(
      accessToken: googleAuth?.accessToken,
      idToken: googleAuth?.idToken,
    );

    // Once signed in, return the UserCredential
    return await FirebaseAuth.instance.signInWithCredential(credential);
  }
}
