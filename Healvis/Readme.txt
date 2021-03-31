Failed to install the app. Make sure you have the Android development environment set 오류가 뜨면
/android 안에 local.properties를 생성하고
sdk.dir = C:\\Users\\<user name>\\AppData\\Local\\Android\\sdk

Firebase Authentication in RN
firebase 만들 때 "react native init <앱 이름>"에서 패키지 이름에 com.<앱 이름> 해야함.

* Google Login in RN with Firebase
https://www.pradipdebnath.com/2020/10/06/how-to-implement-google-login-in-react-native-with-firebase/

1. firebase 프로젝트 설정에 가서 '디지털 지문 추가' 선택
2. android/app으로 이동해서
keytool -genkey -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android -keyalg RSA -validity 10000

다 추가해주고 나서는 
cd android
./gradlew clean
해줘야 함.