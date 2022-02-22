// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'feed_store.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$FeedStore on _FeedStore, Store {
  Computed<StoreState>? _$feedScreenStateComputed;

  @override
  StoreState get feedScreenState => (_$feedScreenStateComputed ??=
          Computed<StoreState>(() => super.feedScreenState,
              name: '_FeedStore.feedScreenState'))
      .value;

  final _$_loadedAtom = Atom(name: '_FeedStore._loaded');

  @override
  bool? get _loaded {
    _$_loadedAtom.reportRead();
    return super._loaded;
  }

  @override
  set _loaded(bool? value) {
    _$_loadedAtom.reportWrite(value, super._loaded, () {
      super._loaded = value;
    });
  }

  @override
  String toString() {
    return '''
feedScreenState: ${feedScreenState}
    ''';
  }
}
