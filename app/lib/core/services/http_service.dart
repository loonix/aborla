import 'dart:io';
import 'package:dio/dio.dart';
import 'package:dio_log/interceptor/dio_log_interceptor.dart';
import 'package:shared_preferences/shared_preferences.dart';

class HttpService {
  static Dio? dio;
  static final HttpService _httpService = HttpService._internal();
  static CancelToken _cancelToken = CancelToken();
  static bool? _cancelled;

  factory HttpService() {
    return _httpService;
  }

  HttpService._internal();

  /// initialize dio for making http requests
  static Future initDio() async {
    var baseOptions = BaseOptions(
      baseUrl: 'baseURL', // todo
      connectTimeout: 50000,
      receiveTimeout: 500000,
      responseType: ResponseType.json,
      contentType: 'application/json',
    );

    dio = Dio(baseOptions);
    _cancelToken = CancelToken();
    _cancelled = false;
  }

  static Future addHeader(String? path) async {
    var token = await getAccessToken();
    dio!.options.headers.addAll({HttpHeaders.authorizationHeader: 'Bearer $token'});
    dio!.interceptors.add(DioLogInterceptor());
  }

  static Future<void> throwError(error, StackTrace stackTrace, String functionInfo) async {
    if (error?.type == DioErrorType.connectTimeout) {
      functionInfo += ' Connection Timeout';
    }
    if (error?.type == DioErrorType.receiveTimeout) {
      functionInfo += ' Receive Timeout';
    }
    throw HttpException('Server reported an error. Please try again after some time. - ${error.toString()} - ${functionInfo.toString()}');
  }

  static Future<String?> getAccessToken() async {
    var prefs = await SharedPreferences.getInstance();
    var accessToken = prefs.getString('accessToken');
    return accessToken;
  }

  static Future<T?> Get<T>(String path, {Map<String, String>? queryParameters, Options? options, Function? onReceiveProgress}) async {
    try {
      if (_cancelled!) return null;

      await addHeader(path);
      Response response = await dio!.get<T>(path, queryParameters: queryParameters, options: options, onReceiveProgress: onReceiveProgress as void Function(int, int)?, cancelToken: _cancelToken);
      if (response.statusCode == 200 || response.statusCode == 201) return response.data;
      return null;
    } catch (e, stackTrace) {
      await throwError(e, stackTrace, 'GET - PATH:${path.toString()} QUERYPARAMS: ${queryParameters.toString()} DIO: ${dio?.options.headers}');
      return null;
    }
  }

  static Future Post(String? path, dynamic data, {Function(int sent, int total)? onSendProgress}) async {
    try {
      if (_cancelled!) return;
      await addHeader(path);
      var response = await dio!.post(path!, data: data, onSendProgress: onSendProgress, cancelToken: _cancelToken);
      if (response.statusCode == 200) {
        return response.data;
      }
    } catch (e, stackTrace) {
      await throwError(e, stackTrace, 'POST - PATH:${path.toString()} QUERYPARAMS: ${data.toString()} DIO: ${dio?.options.headers}');
    }
  }

  static Future Put(String? path, dynamic data, {Function(int sent, int total)? onSendProgress}) async {
    try {
      if (_cancelled!) return;
      await addHeader(path);
      var response = await dio!.put(path!, data: data, onSendProgress: onSendProgress, cancelToken: _cancelToken);
      if (response.statusCode == 200) {
        return response.data;
      }
    } catch (e, stackTrace) {
      await throwError(e, stackTrace, 'PUT - PATH:${path.toString()} QUERYPARAMS: ${data.toString()} DIO: ${dio?.options.headers}');
    }
  }

  ///cancel making any http requests
  static void cancel() {
    _cancelled = true;
    _cancelToken.cancel('httprequest is being cancelled as user requested delete appdata');
  }

  /// returns if http requests are cancelled
  static bool? get isCancelled {
    return _cancelled;
  }
}
