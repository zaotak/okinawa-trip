/* 가족 공유 설정
   firebase: Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)의 firebaseConfig 값을 넣으면 체크가 가족과 공유됩니다.
   비워 두면(null) 체크는 각자 휴대폰에만 저장됩니다. 이 값은 공개되어도 되는 설정값입니다.
   가족 공유 코드는 이 파일에 넣지 않습니다. 가족에게 보낸 링크(?trip=...)로 한 번 열면 휴대폰에 저장됩니다. */
window.TRIP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDDv_xyh2Cf5UmbYd1JvfmzexFJUQFRcTU",
    authDomain: "okinawa-trip-a5628.firebaseapp.com",
    projectId: "okinawa-trip-a5628",
    storageBucket: "okinawa-trip-a5628.firebasestorage.app",
    messagingSenderId: "951321174823",
    appId: "1:951321174823:web:77ea59c6ff0fb014ec7f02"
  },
  /* 영수증 AI 판별 (Firebase AI Logic · Gemini Developer API, 무료 요금제)
     models: 앞에서부터 시도합니다. appCheck.siteKey: reCAPTCHA 사이트 키(공개돼도 되는 값)를 넣으면 남이 AI를 쓰지 못하게 막습니다. */
  ai: {
    models: ["gemini-3.5-flash", "gemini-2.5-flash"],
    appCheck: { type: "v3", siteKey: "" }
  }
};
