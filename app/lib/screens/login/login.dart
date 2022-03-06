import 'package:ABorla/core/mobx/store_state.dart';
import 'package:ABorla/screens/login/login_store.dart';
import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';

class Login extends StatefulWidget {
  Login({Key? key}) : super(key: key);

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final LoginStore _loginStore = LoginStore();

  buildScreen() {
    return Scaffold(
      body: SafeArea(
        child: InkWell(
          onTap: () async {
            await _loginStore.signInWithGoogle();
          },
          child: Ink(
            color: Color(0xFF397AF3),
            child: Padding(
              padding: EdgeInsets.all(6),
              child: Wrap(
                crossAxisAlignment: WrapCrossAlignment.center,
                children: [
                  Icon(Icons.android), // <-- Use 'Image.asset(...)' here
                  SizedBox(width: 12),
                  Text('Sign in with Google'),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    _loginStore.init();
    return Observer(builder: (_) {
      switch (_loginStore.feedScreenState) {
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
